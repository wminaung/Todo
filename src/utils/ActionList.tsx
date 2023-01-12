import React from "react";
type ActionListProps = {
  content: string;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  activeAction: ActiveAction;
};
enum ActiveAction {
  ALL = "all",
  ACTIVE = "active",
  COMPLETE = "complete",
  CLEARCOMPLETE = "clearComplete",
}
export const ActionList = ({
  content,
  onClick,
  activeAction,
}: ActionListProps) => {
  const capitalise = (input: string) => {
    return `${input[0].toUpperCase()}${input.slice(1).toLowerCase()}`;
  };
  return (
    <div
      className={`${
        activeAction === content ? "opacity-100" : ""
      } hover:opacity-90 font-bold  opacity-40 cursor-pointer select-none`}
      onClick={onClick}
    >
      {capitalise(content)}
    </div>
  );
};
