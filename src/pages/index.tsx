import React from 'react';
import { Button } from 'antd';
import { createBasicModal, useModal, BasicModal } from '../components';
import styles from './index.less';

const MyModal = createBasicModal(
  'MyModal',
  ({ args, modalEvent: { resolveHide } }) => {
    return (
      <BasicModal
        id="MyModal"
        title="MyModal"
        onOkClick={() => resolveHide('callbak')}
      >
        <div>MyModal{args}</div>
      </BasicModal>
    );
  },
);

export default function IndexPage() {
  const { show, hide } = useModal('MyModal');
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>

      <MyModal></MyModal>

      <Button
        onClick={() =>
          show('useModalModel').then((result) => console.log(result))
        }
      >
        show
      </Button>
      <Button onClick={() => hide()}>hide</Button>
    </div>
  );
}
