import React from "react";

type IconCrossPrlops = {
  onClickForDelete: (
    event: React.MouseEvent,
    id: number,
    isDone: boolean
  ) => void;
  id: number;
  isDarkTheme: boolean;
  isDone: boolean;
};

export const IconCross = ({
  onClickForDelete,
  id,
  isDone,
  isDarkTheme,
}: IconCrossPrlops) => {
  return (
    <div
      onClick={(e) => {
        onClickForDelete(e, id, isDone);
      }}
      className="cursor-pointer hover:opacity-50"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
        <path
          fill={`${isDarkTheme ? "#fff" : "#000"}`}
          fillRule="evenodd"
          d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
        />
      </svg>
    </div>
  );
};
