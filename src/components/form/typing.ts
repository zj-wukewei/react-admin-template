import { FormProps, FormItemProps, FormInstance, RowProps, ColProps, InputProps, SelectProps } from "antd";

export interface FormSchemasProps extends FormProps {
  schemas: SchemaItem[];
  form: FormInstance;
  rowProps?: RowProps;
  colProps?: ColProps;
  tableForm?: boolean;
  onTableFormClick?: (valus: any) => void
}

export interface SchemaItem extends FormItemProps {
  component: ComponentType;
  colProps?: ColProps;
  //依赖莫个值
  dependencieNames?: string[];
  renderShowItem?: (valus: any) => boolean;
  componentProps?: ComponentTypeProps;
}

export type FormHookConfig = Omit<FormSchemasProps, 'form' | 'onTableFormOk'>

export type ComponentType = "Input" | "Select";

export type ComponentTypeProps = InputProps | SelectProps<any>;