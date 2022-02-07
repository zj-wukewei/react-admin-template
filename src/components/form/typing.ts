import { FormProps, FormItemProps, FormInstance, RowProps, ColProps } from "antd";

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
  componentProps?: any;
}

export type ComponentType = "Input" | "Select";