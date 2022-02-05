import { FormInstance, Form } from "antd";
import { FormSchemasProps } from "../typing";

function useForm (config: Omit<FormSchemasProps, 'form'>): [FormSchemasProps, FormInstance] {
  const [form] = Form.useForm();
  const register: FormSchemasProps = { ...config, form };
  return [register, form];
}

export default useForm;