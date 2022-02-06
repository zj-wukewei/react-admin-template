import { useMemo } from "react";
import { FormInstance, Form } from "antd";
import { FormSchemasProps } from "../typing";

function useForm (config: Omit<FormSchemasProps, 'form'>): [FormSchemasProps, FormInstance] {
  const [form] = Form.useForm();
  const register: FormSchemasProps = useMemo(() => ({ ...config, form }), [form, config]);
  return [register, form];
}

export default useForm;