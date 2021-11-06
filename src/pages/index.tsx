import React from 'react';
import { Button } from 'antd';
import { createBasicModal, useModal } from '../components';
import styles from './index.less';

const MyModal = createBasicModal(
  {
    id: 'MyModal',
    title: 'MyModal',
  },
  ({
    args,
    setConfirmLoadingTrue,
    setConfirmLoadingFalse,
  }: {
    args: string;
    setConfirmLoadingTrue: () => void;
    setConfirmLoadingFalse: () => void;
  }) => {
    return (
      <div>
        MyModal{args}
        <Button onClick={setConfirmLoadingTrue}>setConfirmLoadingTrue</Button>
        <Button onClick={setConfirmLoadingFalse}>setConfirmLoadingFalse</Button>
      </div>
    );
  },
);

export default function IndexPage() {
  const { show, hide } = useModal('MyModal');
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>

      <MyModal></MyModal>

      <Button onClick={() => show('useModalModel')}>show</Button>
      <Button onClick={() => hide()}>hide</Button>
    </div>
  );
}
