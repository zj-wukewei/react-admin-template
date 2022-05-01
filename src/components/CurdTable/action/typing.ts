import { ButtonProps } from "antd/es/button";
import { ActionType } from "../typing";

export interface BasicActionProp {
  type: ActionType
}
export interface TabeDeleteProps extends BasicActionProp {
  //暂时先定义删除
  api: (id: any) => Promise<any>;
  rowKey?: string;
  record: any;
  title?: string;
};

export interface ModalActionProps extends BasicActionProp {
  text: string;
  modalId: string;
  record?: any;
  buttonComponent?: ButtonProps
}
