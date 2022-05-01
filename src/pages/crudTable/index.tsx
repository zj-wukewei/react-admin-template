import { CrudTableProps } from "@/components/CurdTable/typing";
import CrudTable from "../../components/CurdTable";
import { FormHookConfig } from '../../components/Form/typing';

const TableDemo = () => {


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

   
  const config : CrudTableProps = {
    table: {
      actions: [{
        type: 'ModalButtom',
        text: '添加',
        modalId: "add"
      },
      {
        type: 'ModalButtom',
        text: 'BasicModal',
        modalId: "BasicModal",
      }]
    },
    modals: [{
      type: 'FormModal',
      modalId: "add",
        api: apiForm,
        formConfig: form1,
        modalComponent: {
          title: "add"
        }
    }, {
      type: "BasicModal",
      modalId: "BasicModal",
        modalComponent: {
          title: "add"
        },
        render: (args: any) => <div>BasicModal</div>
    }],
  }


  return (
    <>
      <CrudTable {...config} />
    </>
  );
};

export default TableDemo;
