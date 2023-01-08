import React from "react";
import { CheckIcon } from "../utils/CheckIcon";

type CheckUnCheckProps = {
  todoItem: {
    content: string;
    isDone: boolean;
    id: number;
  };
  isDarkTheme?: string;
  onClickForIsDone: (event: React.MouseEvent) => void;
};

export const CheckUncheck = ({
  todoItem,
  onClickForIsDone,
}: CheckUnCheckProps) => {
  return (
    <div
      className={`h-16 w-16 flex relative  justify-center items-center cursor-pointer`}
      onClick={onClickForIsDone}
    >
      <CheckIcon
        className={` ${
          todoItem.isDone ? "block absolute" : "hidden"
        } w-5 h-5  bg-blue-500 rounded-xl flex justify-center items-center `}
      />
      <i
        className={` fa-regular fa-circle m-0 p-0 text-xl opacity-25  hover:opacity-40`}
      ></i>
    </div>
  );
};
