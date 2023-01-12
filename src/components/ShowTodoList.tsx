import React, { useEffect, useState } from "react";
import TodoItem from "../utils/TodoItem";
import { Action } from "./Action";
import { v4 as uuidv4 } from "uuid";
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

  let dragIndex = 0;
  let dragItem: Todo = {} as Todo;
  let dropIndex = 0;
  let dropItem: Todo = {} as Todo;
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, id: number) => {
    dragIndex = showItems.findIndex((item) => item.id === id);
    dragItem = showItems[dragIndex];
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, id: number) => {
    dropIndex = showItems.findIndex((item) => item.id === id);
    dropItem = showItems[dropIndex];
    const dnd = showItems.map((item, idx) => {
      if (idx === dragIndex) {
        return dropItem;
      }
      if (idx === dropIndex) {
        return dragItem;
      }
      return item;
    });
    setTodo(dnd);
  };
  return (
    <div className="relative rounded transition-all">
      <div className="w-full rounded   shadow-zinc-900 shadow-md  transition-all">
        {showItems.map((item: any) => (
          <TodoItem
            todoItem={item}
            key={uuidv4()}
            isDarkTheme={isDarkTheme}
            onClickForIsDone={handleClickForIsDone}
            onClickForDelete={handleClickForDelete}
            onDragOver={handleDragOver}
            onDragStart={handleDragStart}
            onDrop={handleDrop}
          />
        ))}
      </div>
      <div
        className={`${
          isDarkTheme
            ? "bg-slate-900 border-slate-900"
            : "bg-slate-50 text-slate-900  "
        }  w-full    h-10 z-50 flex justify-center items-center  shadow-lg   rounded-b`}
      >
        <Action
          todo={todo}
          isDarkTheme={isDarkTheme}
          activeAction={activeAction}
          action={{ all, active, complete, clearComplete }}
        />
      </div>
    </div>
  );
};
