import { useState, useCallback } from 'react';

const useModalModel = () => {
  const [modalModel, setModalModel] = useState({});

  const showModal = useCallback(
    ({ modalId, args = true }: { modalId: string; args: any }) => {
      setModalModel({
        ...modalModel,
        [modalId]: args,
      });
    },
    [],
  );

  const hideModal = useCallback((modalId: string) => {
    setModalModel({
      ...modalModel,
      [modalId]: false,
    });
  }, []);

  return { modalModel, showModal, hideModal };
};

export default useModalModel;
