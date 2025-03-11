import type { FormProps } from 'antd';
import { Form } from 'antd';
import Layout from '../../styles/template/Layout';
import { Button } from '../../styles/button';
import { FormFieldInput, FormFieldPassword } from '../../styles/form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { loginFailedToast, loginSuccessToast } from '../../services/toast';
import { useAuth } from '../../context/AuthContext';

type FieldType = {
  email?: string;
  password?: string;
};

const LoginHeroSection = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    console.log('Success:', values);

    try {
      const response = await axios.post(
        'http://localhost:3000/api/v1/auth/login',
        values,
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );

      login();
      console.log('Login Successful ', response.data);
      loginSuccessToast();

      setTimeout(() => {
        navigate('/');
      }, 1500);
    } catch (error) {
      console.log(error);
      loginFailedToast();
    }
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (
    errorInfo
  ) => {
    console.log('Failed:', errorInfo);
  };

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
                  Don't have an account?{' '}
                  <a
                    href="/register"
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
