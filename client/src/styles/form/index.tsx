import { Input } from "antd";

export const FormFieldInput = ({
  placeholder,
  ...props
}: {
  placeholder: string;
}) => {
  return <Input className={`!py-2`} placeholder={placeholder} {...props} />;
};

export const FormFieldPassword = ({
  placeholder,
  ...props
}: {
  placeholder: string;
}) => {
  return (
    <Input.Password className={`!py-2`} placeholder={placeholder} {...props} />
  );
};
