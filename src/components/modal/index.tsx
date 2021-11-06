import { Modal } from 'antd';
import useModal from './hooks/useModal';
import useBoolean from '../../hooks/useBoolean';

interface IBasicModalProps {
  id: string;
  children: React.ReactNode;
  [key: string]: any;
}

const BasicModal = ({ id, children, ...rest }: IBasicModalProps) => {
  const { visible, show, hide } = useModal(id);
  return (
    <Modal
      onCancel={() => hide()}
      onOk={() => hide()}
      visible={visible}
      {...rest}
    >
      {children}
    </Modal>
  );
};

interface BasicModalProps {
  id: string;
  title: string;
  [key: string]: any;
}

const createBasicModal = (
  { id, title, ...rest }: BasicModalProps,
  Comp: any,
) => {
  return (props: any) => {
    const { args } = useModal(id);
    const [loading, { setTrue, setFalse }] = useBoolean(false);
    return (
      <BasicModal id={id} title={title} confirmLoading={loading} {...rest}>
        <Comp
          args={args}
          setConfirmLoadingTrue={setTrue}
          setConfirmLoadingFalse={setFalse}
          {...props}
        ></Comp>
      </BasicModal>
    );
  };
};

export default createBasicModal;
