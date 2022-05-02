import { CrudTableProps } from '@/components/CurdTable/typing';
import { TableRegister } from '@/components/Table/typing';
import CrudTable from '../../components/CurdTable';
import { FormHookConfig } from '../../components/Form/typing';

const TableDemo = () => {
  const apiForm = (data: any) => {
    console.log('apiForm', data);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(1);
      }, 3000);
    });
  };

  const form1: FormHookConfig = {
    labelCol: { span: 3 },
    wrapperCol: { span: 21 },
    layout: 'horizontal',
    schemas: [
      {
        component: 'Input',
        name: 'name',
        label: '姓名',
        rules: [{ required: true, message: '请输入' }],
      },
      {
        component: 'Select',
        name: 'select',
        label: '姓名',
        rules: [{ required: true, message: '请输入' }],
        componentProps: {
          options: [
            {
              label: 'china',
              value: 1,
            },
            {
              label: 'usa',
              value: 2,
            },
          ],
        },
      },
      {
        component: 'Input',
        name: 'name2',
        label: '姓名44',
        rules: [{ required: true, message: '请输入' }],
      },
      {
        component: 'Input',
        name: 'name1',
        label: '姓名2',
        // dependencieNames: ['name', 'select'],
        // renderShowItem: ({ name, select }) => name == 'wkw' && select == '1',
        rules: [{ required: true, message: '请输入' }],
      },
    ],
  };

  const fetcApi = (aaa: any) => {
    console.log('aaaaa', aaa);
    return new Promise((resolve) => {
      setTimeout(async () => {
        resolve({
          success: true,
          data: {
            total: 31,
            list: [
              { id: '0', aa: 1111, bb: 222 },
              { id: '1', aa: 1111, bb: 222 },
              { id: '2', aa: 1111, bb: 222 },
              { id: '3', aa: 1111, bb: 222 },
            ],
          },
        });
      }, 1000);
    });
  };

  const table: TableRegister = {
    api: fetcApi,
    rowKey: 'id',
    syncUrl: true,
    columns: [
      {
        title: 'id',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: 'aa',
        dataIndex: 'aa',
        key: 'aa',
      },
      {
        title: 'bb',
        dataIndex: 'bb',
        key: 'bb',
      },
    ],
    schemas: [
      {
        component: 'Input',
        name: 'name',
        label: '姓名',
        rules: [{ required: true, message: '请输入' }],
      },
      {
        component: 'Select',
        name: 'select',
        label: '姓名',
        rules: [{ required: true, message: '请输入' }],
        componentProps: {
          options: [
            {
              label: 'china',
              value: 1,
            },
            {
              label: 'usa',
              value: 2,
            },
          ],
        },
      },
      {
        component: 'Input',
        name: 'name2',
        label: '姓名44',
        rules: [{ required: true, message: '请输入' }],
      },
      {
        component: 'Input',
        name: 'name1',
        label: '姓名2',
        // dependencieNames: ['name', 'select'],
        // renderShowItem: ({ name, select }) => name == 'wkw' && select == '1',
        rules: [{ required: true, message: '请输入' }],
      },
    ],
  };

  const api11 = (id: number) => {
    console.log('api', id);
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('api111', id);
        resolve(1);
      }, 3000);
    });
  };

  const config: CrudTableProps = {
    table: {
      actions: [
        {
          type: 'ModalButtom',
          text: '添加',
          modalId: 'add',
        },
        {
          type: 'TabeDelete',
          text: 'BasicModal',
          api: api11,
          record: {id: 11},
        },
      ],
      tableRegister: table,
    },
    modals: [
      {
        type: 'FormModal',
        modalId: 'add',
        api: apiForm,
        formConfig: form1,
        modalComponent: {
          title: 'add',
        },
      },
      {
        type: 'BasicModal',
        modalId: 'BasicModal',
        modalComponent: {
          title: 'add',
        },
        render: (args: any) => <div>BasicModal</div>,
      },
    ],
  };

  return (
    <>
      <CrudTable {...config} />
    </>
  );
};

export default TableDemo;
