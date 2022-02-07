import { useTable, BasicTable } from '../../components';
import { Button } from 'antd';

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

const TableDemo = () => {
  const [register, { refresh, manualRun, refreshStartPage }] = useTable({
    api: fetcApi,
    rowKey: 'id',
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
  });

  return (
    <>
      <Button onClick={refresh}>refresh</Button>
      <Button onClick={refreshStartPage}>refreshStartPage</Button>
      <Button onClick={() => manualRun({ a: "111" })}>manualRun</Button>
      <BasicTable {...register} />
    </>
  );
};

export default TableDemo;
