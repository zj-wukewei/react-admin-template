import React from "react";
import { CombineService } from '@ahooksjs/use-request/lib/types';
import { SchemaItem } from "../form/typing";

export interface TableRegister<R = any, P extends any[] = any> {
  api: CombineService<R, P>;
  columns: any[];
  rowKey: string | ((record: any) => string);
  schemas?: SchemaItem[];
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