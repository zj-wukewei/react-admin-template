import { useMemo } from 'react';
import { Modal } from 'antd';
import useModal from './hooks/useModal';

interface IBasicModalProps {
  id: string;
  children: React.ReactNode;
  [key: string]: any;
  onOkClick?: () => void;
}

export const BasicModal = ({
  id,
  children,
  onOkClick,
  ...rest
}: IBasicModalProps) => {
  const { visible, hide } = useModal(id);
  return (
    <Modal
      onCancel={() => hide()}
      onOk={() => onOkClick && onOkClick()}
      visible={visible}
      {...rest}
    >
      {children}
    </Modal>
  );
};

interface IModalInnerProps {
  args?: any;
  [key: string]: any;
}

export const createBasicModal = (
  id: string,
  Comp: React.JSXElementConstructor<IModalInnerProps>,
) => {
  return (props: any) => {
    const { args, show, hide, resolveHide } = useModal(id);
    const modalEvent = useMemo(
      () => ({
        show,
        hide,
        resolveHide,
      }),
      [show, hide, resolveHide],
    );
    return <Comp args={args} modalEvent={modalEvent} {...props} />;
  };
};
