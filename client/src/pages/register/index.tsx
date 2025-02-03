import type { FormProps } from "antd";
import { Button, Card, Form, Input } from "antd";
import { H3 } from "../../styles/typography";

type FieldType = {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Register: React.FC = () => (
  <div className="flex flex-col justify-center items-center max-w-screen h-[62vh] bg-gray-100 pt-8  ">
    <Card className="w-full max-w-md p-6 border-8 shadow-md"
        style={{ backgroundColor: "transparent" }}
    >
    <H3 className="p-4 text-teal-600 flex justify-center font-medium">REGISTER</H3>
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item<FieldType>
        label="Confirm Password"
        name="confirmPassword"
        rules={[
          { required: true, message: "Please input your confirm password!" },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item label={null}>
        <div className="flex justify-start">
          <Button
            type="primary"
            htmlType="submit"
            style={{ backgroundColor: "#14b8a6", borderColor: "#14b8a6" }}
          >
            Register
          </Button>
        </div>
      </Form.Item>
    </Form>
    </Card>
  </div>
);

export default Register;
