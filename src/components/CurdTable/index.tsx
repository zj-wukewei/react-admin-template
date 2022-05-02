import Table from '../Table';
import useTable from '../Table/hooks/useTable';
import { CuruTableContext } from './context';
import {
  CrudTableProps,
  componentActionMap,
  componentModalMap,
} from './typing';

const CrudTable = (props: CrudTableProps) => {
  const [register, tableActions] = useTable(props.table.tableRegister);
  const {
    modals,
    table: { actions },
  } = props;

  const ModalsComponets = modals.map((modal) => {
    const Component = componentModalMap.get(modal.type);
    return <Component {...modal} />;
  });

  const ActionsComponents = actions.map((action) => {
    const Component = componentActionMap.get(action.type);
    return <Component {...action} />;
  });

  return (
    <CuruTableContext.Provider
      value={{
        tableActions,
      }}
    >
      {ModalsComponets}
      <div>{ActionsComponents}</div>

      <Table {...register}></Table>
    </CuruTableContext.Provider>
  );
};

export default CrudTable;
