
import { BasicRenderModalProps } from "./typing";
import { BasicModal, createBasicModal } from '../../Modal';

const BasicRenderModal = (props: BasicRenderModalProps) => {
  const BasicRenderModalComponent = createBasicModal(
    props.modalId,
    ({ args, modalEvent }) => {
      return (
        <BasicModal
          id={props.modalId}
          {...props}
        >
        {
          props.render(args, modalEvent)
        }
        </BasicModal>
      );
    },
  );
  return <BasicRenderModalComponent></BasicRenderModalComponent>
};

export default BasicRenderModal;