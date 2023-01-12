import React from "react";
import { CheckUncheck } from "../components/CheckUncheck";

import { IconCross } from "./IconCross";
type Todo = { id: number; content: string | undefined; isDone: boolean };
type TodoItemProps = {
  todoItem: {
    content: string;
    isDone: boolean;
    id: number;
  };
  onClickForDelete: (e: React.MouseEvent, id: number, isDone: boolean) => void;

  isDarkTheme: boolean;
  onClickForIsDone: (event: React.MouseEvent, id: number) => void;

  onDragStart: (e: React.DragEvent<HTMLDivElement>, id: number) => void;
  onDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  onDrop: (e: React.DragEvent<HTMLDivElement>, id: number) => void;
};

const TodoItem = ({
  todoItem,
  isDarkTheme,
  onClickForIsDone,

  onClickForDelete,
  onDragStart,
  onDragOver,
  onDrop,
}: TodoItemProps) => {
  //

  return (
    <div
      draggable="true"
      onDragOver={(e) => {
        onDragOver(e);
      }}
      onDragStart={(e) => {
        onDragStart(e, todoItem.id);
      }}
      onDrop={(e) => {
        onDrop(e, todoItem.id);
      }}
      className={`flex  ${
        isDarkTheme ? "bg-slate-900" : "bg-slate-50 text-slate-900 "
      }  overflow-hidden  border-b   w-full h-16 items-center justify-between transition-all`}
    >
      <CheckUncheck
        todoItem={todoItem}
        onClickForIsDone={(e) => onClickForIsDone(e, todoItem.id)} // if isdone line through the list
      />
      <div
        className={`font-bold h-full overflow-hidden  flex items-center w-[80%]`}
      >
        <span
          className={`truncate text-xl px-0.5 ${
            todoItem.isDone ? "line-through opacity-40" : ""
          }`}
        >
          {todoItem?.content ? todoItem.content : ""}
        </span>
      </div>
      <div className="h-16 w-16 flex  justify-center items-center">
        <IconCross
          onClickForDelete={onClickForDelete}
          id={todoItem.id}
          isDone={todoItem.isDone}
          isDarkTheme={isDarkTheme}
        />
      </div>
    </div>
  );
};

export default TodoItem;
