import React from "react";

const TodoItem = ({ todo, isDarkTheme }: any) => {
  return (
    <div
      className={` ${
        isDarkTheme
          ? "bg-slate-900 border-white"
          : "bg-white text-slate-900 border-gray-500"
      } border-b   w-full h-16 flex justify-center items-center`}
    >
      {todo?.content ? todo.content : ""}
    </div>
  );
};

export default TodoItem;
