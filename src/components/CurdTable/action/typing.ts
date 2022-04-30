import { ButtonType } from "antd/es/button";
export interface TabeDeleteProps {
  //暂时先定义删除
  api: (id: any) => Promise<any>;
  rowKey?: string;
  record: any;
  title?: string;
  okText?: string;
  cancelText?: string;
};

export interface ModalButtomProps {
  text: string;
  modalId: string;
  type?: ButtonType;
  record?: any;
}