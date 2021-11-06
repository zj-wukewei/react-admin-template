import { useCallback, useEffect } from 'react';
import { useModel } from 'umi';

const modalCallbacks: any = {};

const useModal = (modalId: string) => {
  const { modalModel, showModal, hideModal } = useModel<any>(
    'useModalModel',
  );

  const args = modalModel[modalId];

  const show = useCallback(
    (args?) => {
      return new Promise((resolve) => {
        modalCallbacks[modalId] = resolve;
        showModal({ modalId, args });
      });
    },
    [modalId],
  );

  const hide = useCallback(() => {
    hideModal(modalId);
  }, [modalId]);

  const resolve = useCallback((result) => {
    if (modalCallbacks[modalId]) {
      modalCallbacks[modalId](result);
      delete modalCallbacks[modalId];
    }
  }, [modalId]);

  const resolveHide = useCallback((result) => {
    resolve(result);
    hide();
  }, [modalId, hide, resolve]);

  useEffect(() => {
    return () => {
      if (modalCallbacks[modalId]) {
        delete modalCallbacks[modalId];
      }
    }
  }, [modalId])

  return { args, visible: !!args, show, hide, resolveHide };
};

export default useModal;
