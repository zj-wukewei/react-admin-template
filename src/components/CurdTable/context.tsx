import { createContext } from "react";
import { TableActions } from "../Table/typing";
 
export interface ICrudTableContext {
  tableActions: TableActions
}
 
export const CuruTableContext =  createContext<ICrudTableContext | null>(null);