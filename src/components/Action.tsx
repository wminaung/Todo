import { ActionList } from "../utils/ActionList";

type Todo = { id: number; content: string | undefined; isDone: boolean };

type ActionMethods = {
  all: () => void;
  active: () => void;
  complete: () => void;
  clearComplete: () => void;
};

enum ActiveAction {
  ALL = "all",
  ACTIVE = "active",
  COMPLETE = "complete",
}
console.log(ActiveAction);

type ActionProps = {
  todo: Todo[];
  action: ActionMethods;
  activeAction: ActiveAction;
};

export const Action = ({ todo, action, activeAction }: ActionProps) => {
  return (
    <div
      className={`flex px-5 h-full w-full justify-between items-center text-sm font-light transition-all`}
    >
      <div>{todo.filter((item) => item.isDone === false).length} item left</div>
      <ul className={`flex w-2/6 h-full justify-between items-center `}>
        <ActionList
          content="all"
          activeAction={activeAction}
          onClick={action.all}
        />
        <ActionList
          activeAction={activeAction}
          content="active"
          onClick={action.active}
        />
        <ActionList
          activeAction={activeAction}
          content="complete"
          onClick={action.complete}
        />
      </ul>
      <ActionList
        activeAction={activeAction}
        content="clear Complete"
        onClick={action.clearComplete}
      />
    </div>
  );
};
