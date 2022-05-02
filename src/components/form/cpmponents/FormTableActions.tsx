
import { Col, Button, Form } from 'antd';
import { DownOutlined } from '@ant-design/icons';

interface FormTableActionsProps {
  open: boolean;
  handleOnReset: () => void;
  handleOnOpen: () => void;
  hanldeOnOk: () => void;
}

const defaultCollapseRender = (open: boolean) => {
  if (!open) {
    return (
      <>
        展开
        <DownOutlined
          style={{
            marginLeft: '0.5em',
            transition: '0.3s all',
            transform: `rotate(${open ? 0 : 0.5}turn)`,
          }}
        />
      </>
    );
  }

  return (
    <>
      收起
      <DownOutlined
        style={{
          marginLeft: '0.5em',
          transition: '0.3s all',
          transform: `rotate(${open ? 0 : 0.5}turn)`,
        }}
      />
    </>
  );
};

const FormTableActions = (props: FormTableActionsProps) => {

  return (
    <Col className="table-form-action">
      <Button type="primary" onClick={props.hanldeOnOk}>搜索</Button>
      <Button onClick={props.handleOnReset}>重置</Button>
      <Button type="link" onClick={props.handleOnOpen}>
      {
        defaultCollapseRender(props.open)
      }
      </Button>
    </Col>
  )
}

export default FormTableActions;