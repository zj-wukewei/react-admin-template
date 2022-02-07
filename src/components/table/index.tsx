import React, { forwardRef, useImperativeHandle } from 'react';
import { Table } from 'antd';
import { useRequest } from 'umi';
import { TableRegisterProps } from './typing';
import FormTable from '../form/cpmponents/FormTable';

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
      },
    }));


    const hanldeOnOk = (values: any) => {
      run({
        ...params[0],
        ...values,
        current: 1,
      });
    };

    return (
      <>
        {props.schemas && props.schemas.length > 0 && (
          <FormTable
            labelCol={props.labelCol}
            wrapperCol={props.wrapperCol}
            layout={props.layout}
            schemas={props.schemas}
            onTableFormClick={hanldeOnOk}
          />
        )}
        <Table rowKey={props.rowKey} columns={props.columns} {...tableProps} />
      </>
    );
  },
);

export default BasicTable;
