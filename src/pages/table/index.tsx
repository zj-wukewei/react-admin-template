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
