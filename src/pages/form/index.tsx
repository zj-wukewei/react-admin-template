import { useForm, FormSchemas } from '../../components';

const FormDemo = () => {
  const [register] = useForm({
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
    layout: 'horizontal',
    tableForm: true,
    schemas: [{
      component: 'Input',
      name: "name",
      label: "姓名",
      required: true,
    }, {
      component: 'Input',
      name: "name1",
      label: "姓名2",
      required: true,
    }]
  });
  return <FormSchemas {...register}></FormSchemas>
};

export default FormDemo;