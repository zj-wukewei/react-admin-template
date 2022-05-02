import { useEffect } from 'react';
import { SchemaItem } from '../typing';
import { ColProps, Card } from 'antd';
import useForm from '../hooks/useForm';
import FormSchemas from '../index';

type FormLayout = 'horizontal' | 'inline' | 'vertical';

interface FormTableProps {
  schemas: SchemaItem[];
  labelCol?: ColProps;
  wrapperCol?: ColProps;
  layout?: FormLayout;
  onTableFormClick: (valus: any) => void;
  queryState?: any;
  syncUrl?: boolean;
}

const FormTable = (props: FormTableProps) => {
  const {
    schemas,
    labelCol = { span: 6 },
    wrapperCol = { span: 18 },
    layout = 'horizontal',
    queryState,
    syncUrl,
  } = props;
  const [register, form] = useForm({
    labelCol: labelCol,
    wrapperCol: wrapperCol,
    layout: layout,
    tableForm: true,
    schemas: schemas || [],
  });

  useEffect(() => {
    if (syncUrl && queryState) {
      form.setFieldsValue(queryState);
    }
  }, [queryState]);

  return (
    <Card  style={{ marginBottom: 16 }} bodyStyle={{ padding: "24px 24px 0px 24px", background: "white"  }}>
      <FormSchemas {...register} onTableFormClick={props.onTableFormClick} />
    </Card>
  );
};

export default FormTable;
