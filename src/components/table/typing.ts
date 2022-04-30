import React from "react";
import { CombineService } from '@ahooksjs/use-request/lib/types';
import { SchemaItem } from "../Form/typing";
import { ColProps } from 'antd';

type FormLayout = 'horizontal' | 'inline' | 'vertical';
export interface TableRegister<R = any, P extends any[] = any> {
  api: CombineService<R, P>;
  columns: any[];
  rowKey: string | ((record: any) => string);
  schemas?: SchemaItem[];
  labelCol?: ColProps;
  wrapperCol?: ColProps;
  layout?: FormLayout;
  syncUrl?: boolean;
}

export interface TableRegisterProps extends TableRegister {
  [key: string]: any;
  ref: React.Ref<TableActions | null>
}

export interface TableActions {
  refresh: () => void;
  manualRun: (params: any) => void;
  refreshStartPage: () => void;
}