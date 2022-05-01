import { ModalProps } from "antd/es/modal";
import { FormHookConfig } from "../../Form/typing";
export interface EditModalProps {
  //暂时先定义删除
  api: (data: any) => Promise<any>;
  formConfig: FormHookConfig;
  modalId: string;
  modalComponent?: ModalProps
};
