import { Button } from 'antd';
import useModal from '../../Modal/hooks/useModal';
import { ModalActionProps } from './typing';

const ModalButtom = (props: ModalActionProps) => {
  const { record, buttonComponent = { type : 'text' } } = props;
  const { show, hide } = useModal(props.modalId);
  const handleOnClick = () => {
    show(record);
  };
  return (
    <Button {...buttonComponent} onClick={handleOnClick}>
      {props.text}
    </Button>
  );
};

export default ModalButtom;
