import { useCallback } from 'react';
import { useModel } from 'umi';

const useModal = (modalId: string) => {
  const { modalModel, showModal, hideModal } = useModel<any>(
    'useModalModel',
  );

  const args = modalModel[modalId];

  const show = useCallback(
    (args?) => {
      showModal({ modalId, args });
    },
    [modalId],
  );

  const hide = useCallback(() => {
    hideModal(modalId);
  }, [modalId]);

  return { args, visible: !!args, show, hide };
};

export default useModal;
