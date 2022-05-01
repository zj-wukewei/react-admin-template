import React from 'react';
import { Button } from 'antd';
import { createBasicModal, useModal, BasicModal } from '../components';
import { FormHookConfig } from '../components/Form/typing';
import TableDeleteButton from '../components/CurdTable/action/TableDeleteButton';
import ModalButtom from '../components/CurdTable/action/ModalButtom';
import EditFormModal from '../components/CurdTable/modal/EditFormModal';
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
  const api = (id: number) => {
    console.log('api', id);
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('api111', id);
        resolve(1);
      }, 3000);
    });
  };

  const apiForm = (data: any) => {
    console.log('apiForm', data);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(1);
      }, 3000);
    });
  };

  const form1: FormHookConfig = {
    labelCol: { span: 3 },
    wrapperCol: { span: 21 },
    layout: 'horizontal',
    schemas: [
      {
        component: 'Input',
        name: 'name',
        label: '姓名',
        rules: [{ required: true, message: '请输入' }],
      },
      {
        component: 'Select',
        name: 'select',
        label: '姓名',
        rules: [{ required: true, message: '请输入' }],
        componentProps: {
          options: [
            {
              label: 'china',
              value: 1,
            },
            {
              label: 'usa',
              value: 2,
            },
          ],
        },
      },
      {
        component: 'Input',
        name: 'name2',
        label: '姓名44',
        rules: [{ required: true, message: '请输入' }],
      },
      {
        component: 'Input',
        name: 'name1',
        label: '姓名2',
        // dependencieNames: ['name', 'select'],
        // renderShowItem: ({ name, select }) => name == 'wkw' && select == '1',
        rules: [{ required: true, message: '请输入' }],
      },
    ],
  };

  return (
    <div>
      <h1 className={styles.title}>Page index</h1>

      <MyModal></MyModal>

      <TableDeleteButton api={api} record={{ id: 1111 }} />

      <ModalButtom
        record={{
          name2: '1111',
        }}
        modalId="EditFormModal"
        text="打开modalid为MyModal"
      />

      <EditFormModal
        formConfig={form1}
        modalComponent={{ title: "EditFormModal" }}
        modalId="EditFormModal"
        api={apiForm}
      ></EditFormModal>
    </div>
  );
}
