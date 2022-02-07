import { useForm, FormSchemas } from '../../components';

const FormDemo = () => {
  const [register] = useForm({
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
    layout: 'horizontal',
    tableForm: true,
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
  });
  return <FormSchemas {...register}></FormSchemas>;
};

export default FormDemo;
