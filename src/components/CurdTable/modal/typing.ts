import { FormHookConfig } from "../../Form/typing";
export interface EditModalProps {
  //暂时先定义删除
  api: (data: any) => Promise<any>;
  title: string;
  formConfig: FormHookConfig;
  modalId: string;
  okText?: string;
  cancelText?: string;
};
