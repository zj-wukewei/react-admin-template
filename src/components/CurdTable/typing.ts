
import { BasicRenderModalProps, FormModalProps } from "./modal/typing";
import { TabeDeleteProps, ModalActionProps } from "./action/typing";
import FormModal from "./modal/FormModal";
import BasicRenderModal from "./modal/BasicRenderModal";
import ModalButtom from "./action/ModalButtom";
import TableDelete from "./action/TableDeleteButton";
import { TableRegister } from "../Table/typing";

export type ModalType = 'BasicModal' | 'FormModal';

export const componentModalMap = new Map<ModalType, any>();

componentModalMap.set("BasicModal", BasicRenderModal);
componentModalMap.set("FormModal", FormModal);


export type ActionType = 'ModalButtom' | 'TabeDelete';

export const componentActionMap = new Map<ActionType, any>();

componentActionMap.set("ModalButtom", ModalButtom);
componentActionMap.set("TabeDelete", TableDelete);


export interface CrudTableProps {
  table : {
    actions : Array<TabeDeleteProps | ModalActionProps>,
    tableRegister: TableRegister,
  }
  modals: Array<BasicRenderModalProps | FormModalProps>
};


