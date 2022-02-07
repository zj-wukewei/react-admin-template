import React, { forwardRef, useImperativeHandle } from 'react';
import { Table } from 'antd';
import { useRequest } from 'umi';
import { TableRegisterProps } from './typing';
import useForm from '../form/hooks/useForm';
import FormSchemas from '../form';

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

    const [register] = useForm({
      labelCol: { span: 6 },
      wrapperCol: { span: 18 },
      layout: 'horizontal',
      tableForm: true,
      schemas: props.schemas || [],
    });

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
          <FormSchemas
            {...register}
            onTableFormClick={hanldeOnOk}
          ></FormSchemas>
        )}
        <Table rowKey={props.rowKey} columns={props.columns} {...tableProps} />
      </>
    );
  },
);

export default BasicTable;
