import { FormProps, FormItemProps, FormInstance, RowProps, ColProps } from "antd";

export interface FormSchemasProps extends FormProps {
  schemas: SchemaItem[];
  form: FormInstance;
  rowProps?: RowProps;
  colProps?: ColProps;
}

export interface SchemaItem extends FormItemProps {
  component: ComponentType;
  colProps?: ColProps;
  componentProps?: any;
}

export type ComponentType = "Input" | "Select";