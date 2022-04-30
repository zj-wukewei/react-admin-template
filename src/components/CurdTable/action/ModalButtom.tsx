import { Button } from 'antd';
import useModal from '../../Modal/hooks/useModal';
import { ModalButtomProps } from './typing';

const ModalButtom = (props: ModalButtomProps) => {
  const { type = 'primary', record } = props;
  const { show, hide } = useModal(props.modalId);
  const handleOnClick = () => {
    show(record);
  };
  return (
    <Button type={type} onClick={handleOnClick}>
      {props.text}
    </Button>
  );
};

export default ModalButtom;
