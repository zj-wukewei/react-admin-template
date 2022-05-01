import { CrudTableProps, componentActionMap, componentModalMap } from './typing';

const CrudTable = (props: CrudTableProps) => {
  const { modals, table: { actions } } = props;

  const ModalsComponets = modals.map((modal) => {
    const Component = componentModalMap.get(modal.type);
    return <Component {...modal} />;
  });

  const ActionsComponents = actions.map(action => {
    const Component = componentActionMap.get(action.type);
    return <Component {...action} />;
  })

  return <>{ModalsComponets}
    <div>{ActionsComponents}</div>
  </>;
};

export default CrudTable;
