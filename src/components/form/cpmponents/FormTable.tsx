import { SchemaItem } from '../typing';
import { ColProps } from 'antd';
import useForm from '../hooks/useForm';
import FormSchemas from '../index';

type FormLayout = 'horizontal' | 'inline' | 'vertical';

interface FormTableProps {
  schemas: SchemaItem[];
  labelCol?: ColProps;
  wrapperCol?: ColProps;
  layout?: FormLayout;
  onTableFormClick: (valus: any) => void;
}

const FormTable = (props: FormTableProps) => {
  const {
    schemas,
    labelCol = { span: 6 },
    wrapperCol = { span: 18 },
    layout = 'horizontal',
  } = props;
  const [register] = useForm({
    labelCol: labelCol,
    wrapperCol: wrapperCol,
    layout: layout,
    tableForm: true,
    schemas: schemas || [],
  });

  return (
    <FormSchemas
      {...register}
      onTableFormClick={props.onTableFormClick}
    />
  );
};

export default FormTable;
