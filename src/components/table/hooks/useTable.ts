import { useMemo, useRef } from 'react';
import { TableRegisterProps, TableRegister, TableActions } from '../typing';

function useTable(register: TableRegister): [TableRegisterProps, TableActions] {
  const currentTable = useRef<TableActions>(null);
  const registerMemo = useMemo(
    () => ({
      ...register,
      ref: currentTable,
    }),
    [register],
  );

  const tableActions = useMemo(
    () => ({
      refresh: () => currentTable.current?.refresh(),
      manualRun: (params: any) => currentTable.current?.manualRun(params),
      refreshStartPage: () => currentTable.current?.refreshStartPage(),
    }),
    [currentTable.current],
  );
  return [registerMemo, tableActions];
}

export default useTable;
