import React, { useEffect, useState } from "react";
import TodoItem from "../utils/TodoItem";
import { Action } from "./Action";
type Todo = { id: number; content: string | undefined; isDone: boolean };
type ShowTodoListProps = {
  todo: Todo[];
  setTodo: React.Dispatch<React.SetStateAction<Todo[]>>;
  isDarkTheme: boolean;
  handleClickForIsDone: (event: React.MouseEvent, id: number) => void;
};
enum ActiveAction {
  ALL = "all",
  ACTIVE = "active",
  COMPLETE = "complete",
}
export const ShowTodoList = ({
  todo,
  setTodo,
  isDarkTheme,
  handleClickForIsDone,
}: ShowTodoListProps) => {
  const [showItems, setShowItems] = useState<Todo[]>([]);
  const [activeAction, setActiveAction] = useState<ActiveAction>(
    ActiveAction.ALL
  );

  useEffect(() => {
    setShowItems([...todo]);
  }, [todo]);

  useEffect(() => {});

  const clearComplete = () => {
    if (showItems.filter((item) => item.isDone === true).length === 0) {
      return;
    }
    setTodo([...todo].filter((item) => item.isDone === false));
  };
  const all = () => {
    setShowItems([...todo]);
    setActiveAction(ActiveAction.ALL);
  };

  const active = () => {
    setShowItems([...todo].filter((item) => item.isDone === false));
    setActiveAction(ActiveAction.ACTIVE);
  };

  const complete = () => {
    setShowItems([...todo].filter((item) => item.isDone === true));
    setActiveAction(ActiveAction.COMPLETE);
  };

  const handleClickForDelete = (
    e: React.MouseEvent,
    id: number,
    isDone: boolean
  ) => {
    if (isDone === false) {
      return;
    }

    setTodo(showItems.filter((item) => item.id !== id));
  };

  return (
    <div className="relative rounded">
      <div className="w-full rounded [&::-webkit-scrollbar]:hidden  overflow-auto   max-h-[55vh]  shadow-zinc-900 shadow-md  transition-all">
        {showItems.map((item: any) => (
          <TodoItem
            todoItem={item}
            key={item?.id}
            isDarkTheme={isDarkTheme}
            onClickForIsDone={handleClickForIsDone}
            showItems={showItems}
            setShowItems={setShowItems}
            onClickForDelete={handleClickForDelete}
          />
        ))}
      </div>
      <div
        className={`${
          isDarkTheme
            ? "bg-slate-900 border-black"
            : "bg-slate-50 text-slate-900  border-zinc-600"
        } w-full border  h-10 z-50 flex justify-center items-center  shadow-lg absolute left-0 bottom-[-41px] rounded-b`}
      >
        <Action
          todo={todo}
          activeAction={activeAction}
          action={{ all, active, complete, clearComplete }}
        />
      </div>
    </div>
  );
};
