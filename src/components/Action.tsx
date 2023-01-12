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

type ActionProps = {
  todo: Todo[];
  action: ActionMethods;
  activeAction: ActiveAction;
  isDarkTheme: boolean;
};

export const Action = ({
  todo,
  action,
  activeAction,
  isDarkTheme,
}: ActionProps) => {
  return (
    <div
      className={` relative flex px-2 lg:px-5 h-full w-full justify-between items-center text-sm font-light transition-all`}
    >
      <div>{todo.filter((item) => item.isDone === false).length} item left</div>
      <ul
        className={`flex   px-10   lg:w-3/6 lg:h-full lg:justify-between items-center lg:static absolute top-12 h-9  left-0 w-full  lg:border-none  lg:bg-inherit  rounded-sm justify-evenly
        bg-slate-900 shadow-lg    lg:shadow-none
        ${
          isDarkTheme
            ? "bg-slate-900  border-slate-700 border"
            : "bg-slate-50 text-slate-900 border border-slate-300"
        } 
        `}
      >
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
