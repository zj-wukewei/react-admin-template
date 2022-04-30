import { Button, Popconfirm } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { TabeDeleteProps } from './typing';

const TableDelete = (props: TabeDeleteProps) => {
  const {
    api,
    title = '你确定要删除吗？',
    okText = '确定',
    cancelText = '取消',
    rowKey = 'id',
    record,
  } = props;

  const handleOnConfirm = () => {
    return new Promise((resolve, reject) => {
      api(record[rowKey])
        .then(data => resolve(data))
        .catch(e => reject(e));
    })
  }

  return (
    <Popconfirm
      title={title}
      icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
      onConfirm={handleOnConfirm}
      okText={okText}
      cancelText={cancelText}
    >
      <Button type="text">删除</Button>
    </Popconfirm>
  );
};

export default TableDelete;
