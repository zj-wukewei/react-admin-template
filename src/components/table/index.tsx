import React, { forwardRef, useImperativeHandle, useEffect } from 'react';
import { Table } from 'antd';
import { useRequest } from 'umi';
import { TableRegisterProps } from './typing';
import FormTable from '../form/cpmponents/FormTable';
import useUrlState from '@ahooksjs/use-url-state';

const BasicTable = forwardRef(
  (props: TableRegisterProps, ref: React.Ref<any>) => {
    const [state, setState] = useUrlState({
      current: 1,
      pageSize: 10
    }, {
      parseOptions: {
        parseNumbers: true,
        parseBooleans: true,
      }
    });
    const syncUrl = props.syncUrl || false;
    const { tableProps, refresh, params, run } = useRequest(props.api, {
      paginated: true,
      manual: syncUrl,
    });

    useEffect(() => {
      if (params[0] && syncUrl) {
        const { sorter, filters, ...rest } = params[0];
        setState(rest);
      }
    }, [params]);

    useEffect(() => {
      run({
        ...params[0],
        ...state
      });
    }, [])

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
            queryState={state}
            syncUrl={syncUrl}
          />
        )}
        <Table rowKey={props.rowKey} columns={props.columns} {...tableProps} />
      </>
    );
  },
);

export default BasicTable;
