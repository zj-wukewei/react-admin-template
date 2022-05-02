import { useContext } from "react";
import { Button, Popconfirm } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { CuruTableContext } from "../context";
import { TabeDeleteProps } from './typing';

const TableDelete = (props: TabeDeleteProps) => {
  const crudContext = useContext(CuruTableContext);
  const {
    api,
    title = '你确定要删除吗？',
    rowKey = 'id',
    record,
  } = props;

  const handleOnConfirm = () => {
    return new Promise((resolve, reject) => {
      api(record[rowKey])
        .then(data => {
          resolve(data);
          crudContext?.tableActions?.refresh();
        })
        .catch(e => reject(e));
    })
  }

  return (
    <Popconfirm
      title={title}
      icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
      onConfirm={handleOnConfirm}
    >
      <Button type="text">删除</Button>
    </Popconfirm>
  );
};

export default TableDelete;
