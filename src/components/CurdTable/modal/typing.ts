import { ModalProps } from 'antd/es/modal';
import React from 'react';
import { FormHookConfig } from '../../Form/typing';
import { ModalType } from "../typing";
export interface BasicModalProps {
  type: ModalType;
  modalId: string;
  modalComponent: ModalProps;
}
export interface FormModalProps extends BasicModalProps {
  //暂时先定义删除
  api: (data: any) => Promise<any>;
  formConfig: FormHookConfig;
}

export interface BasicRenderModalProps extends BasicModalProps {
  render: (
    data: any,
    modalEvent: { hide: () => void; resolveHide: (relust: any) => void },
  ) => React.ReactNode;
}
