import React, { forwardRef, useImperativeHandle } from 'react';
import { Table } from 'antd';
import { useRequest } from 'umi';
import { TableRegisterProps } from './typing';

const BasicTable = forwardRef(
  (props: TableRegisterProps, ref: React.Ref<any>) => {
    const { tableProps, refresh, params, run } = useRequest(props.api, {
      paginated: true,
    });

    useImperativeHandle(ref, () => ({
      refresh,
      manualRun: (currentParams: any) => {
        run({
          ...params[0],
          ...currentParams,
          current: 1,
        });
      },
     refreshStartPage: () => {
      run({
        ...params[0],
        current: 1,
      });
     }
    }));

    return (
      <Table rowKey={props.rowKey} columns={props.columns} {...tableProps} />
    );
  },
);

export default BasicTable;
