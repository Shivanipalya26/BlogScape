import type { FormProps } from 'antd';
import { Form } from 'antd';
import Layout from '../../styles/template/Layout';
import { Button } from '../../styles/button';
import { FormFieldInput, FormFieldPassword } from '../../styles/form';

type FieldType = {
  email?: string;
  password?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const RegisterHeroSection = () => {
  return (
    <section className="h-full md:h-[100vh]">
      <Layout>
        <main className="w-full flex flex-col items-center justify-center px-4">
          <div className="max-w-sm w-full text-gray-600">
            <div className="text-center">
              <div className="mt-5 space-y-2">
                <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
                  Register Account
                </h3>
                <p className="">
                  Already have an account?{' '}
                  <a
                    href="javascript:void(0)"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Log in
                  </a>
                </p>
              </div>
            </div>
            <Form
              name="Register"
              layout="vertical"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                name="name"
                rules={[{ required: true, message: 'Please input your name!' }]}
                label="Name"
              >
                <FormFieldInput placeholder="Name" />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: 'Please input your email!' },
                  {
                    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: 'Please enter a valid email!',
                  },
                ]}
                label="Email"
              >
                <FormFieldInput placeholder="Email" />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  { required: true, message: 'Please input your password!' },
                  {
                    min: 8,
                    message: 'Password must be at least 8 characters!',
                  },
                  {
                    pattern:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&_]{8,}$/,
                    message:
                      'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character!',
                  },
                ]}
                label="Password"
              >
                <FormFieldPassword placeholder="Password" />
              </Form.Item>
              <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={['password']}
                rules={[
                  {
                    required: true,
                    message: 'Please confirm your password!',
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(
                          'The new password that you entered do not match!'
                        )
                      );
                    },
                  }),
                ]}
              >
                <FormFieldPassword placeholder="confirm password" />
              </Form.Item>
              <Form.Item>
                <Button htmlFor="submit">Log in</Button>
              </Form.Item>
            </Form>
          </div>
        </main>
      </Layout>
    </section>
  );
};

export default RegisterHeroSection;
