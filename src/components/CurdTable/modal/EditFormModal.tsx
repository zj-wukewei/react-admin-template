import { useEffect } from 'react';
import { useRequest } from 'umi';
import { BasicModal, createBasicModal } from '../../Modal';
import FormSchemas from '../../Form';
import useForm from '../../Form/hooks/useForm';
import { EditModalProps } from './typing';

const EditFromModal = (props: EditModalProps) => {
  const { okText = '确定', cancelText = '取消' } = props;
  const [register, form] = useForm(props.formConfig);
  const BasicEditModal = createBasicModal(
    props.modalId,
    ({ args, modalEvent: { resolveHide } }) => {
      const { loading, run } = useRequest(props.api, {
        manual: true,
        onSuccess: (data) => resolveHide(data),
      });
      useEffect(() => {
        form.resetFields();
        args && form.setFieldsValue(args);
      }, [args]);

      const handleOkClick = async () => {
        const data = await form.validateFields();
        run(data);
      };

      return (
        <BasicModal
          id={props.modalId}
          title={props.title}
          confirmLoading={loading}
          okText={okText}
          cancelText={cancelText}
          onOkClick={handleOkClick}
        >
          <FormSchemas {...register} />
        </BasicModal>
      );
    },
  );

  return <BasicEditModal />;
};

export default EditFromModal;
