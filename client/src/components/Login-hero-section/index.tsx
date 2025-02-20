import type { FormProps } from 'antd';
import { Form } from 'antd';
import Layout from '../../styles/template/Layout';
import { Button } from '../../styles/button';
import { FormFieldInput, FormFieldPassword } from '../../styles/form';
import axios from 'axios';

type FieldType = {
  email?: string;
  password?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
  console.log('Success:', values);

  try {
    const response = await axios.post('http://localhost:3000/api/v1/auth/login', values, {
      headers: { 'Content-Type': 'application/json'},
      withCredentials: true,  
    });

    console.log("Login Successful ", response.data);
    alert('Logged In')
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios Error:', error.response?.data || error.message);
      alert(error.response?.data?.message || 'Registration failed!');
    } else {
      console.error('Unexpected Error:', error);
      alert('An unexpected error occurred.');
    }
  }
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const LoginHeroSection = () => {
  return (
    <section className="h-full md:h-[100vh]">
      <Layout>
        <main className="w-full flex flex-col items-center justify-center px-4">
          <div className="max-w-sm w-full text-gray-600">
            <div className="text-center">
              <div className="mt-5 space-y-2">
                <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
                  Log in to your account
                </h3>
                <p className="">
                  Don't have an account?
                  <a
                    href="javascript:void(0)"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Sign up
                  </a>
                </p>
              </div>
            </div>
            <Form
              name="login"
              layout="vertical"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
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
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message:
                      'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character!',
                  },
                ]}
                label="Password"
              >
                <FormFieldPassword placeholder="Password" />
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

export default LoginHeroSection;
