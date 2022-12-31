import React, { memo, useRef, useState } from "react";
import TodoItem from "../utils/TodoItem";
type Todo = { id: number; content: string | undefined; isDone: boolean };

const Home = memo(({ onClick, isDarkTheme }: any) => {
  const [todo, setTodo] = useState<Todo[]>([]);
  // const [input, setInput] = useState("");
  const inputRef = useRef<null | HTMLInputElement>(null);

  console.count("App render");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const currentInput = inputRef.current;
      if (currentInput) {
        setTodo([
          ...todo,
          { id: todo.length, content: currentInput?.value, isDone: false },
        ]);
        currentInput.value = "";
      }
    }
  };

  return (
    <div className=" max-w-[1440px]  mx-auto h-full  text-white">
      <div className="md:w-[45%] sm:w-1/2 w-3/5 mx-auto">
        <h1 id="todo" className="text-4xl font-semibold flex justify-between ">
          TODO
          <div
            className="hover:opacity-50 cursor-pointer transition-all"
            onClick={onClick}
          >
            {isDarkTheme ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26">
                <path
                  fill="#FFF"
                  fillRule="evenodd"
                  d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"
                />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26">
                <path
                  fill="#FFF"
                  fillRule="evenodd"
                  d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"
                />
              </svg>
            )}
          </div>
        </h1>
        <div
          className={`flex mt-10  ${
            isDarkTheme ? "bg-slate-900" : "bg-white text-slate-900 font-bold"
          } rounded overflow-hidden`}
        >
          <div className={`h-16 w-16 flex  justify-center items-center`}>
            <i className={`fa-regular fa-circle  text-xl opacity-25 `}></i>
          </div>

          <input
            type="text"
            className="text-lg w-4/5 px-2 bg-inherit outline-none"
            onKeyDown={handleKeyDown}
            ref={inputRef}
          />
        </div>

        <div className="mt-6 w-full rounded overflow-hidden shadow-zinc-900 shadow-sm ">
          {todo.map((item: any) => (
            <TodoItem todo={item} key={item?.id} isDarkTheme={isDarkTheme} />
          ))}
          <div
            className={`${
              isDarkTheme ? "bg-slate-900" : "bg-white text-slate-900 font-bold"
            } w-full h-10 flex justify-center items-center `}
          >
            That is not good
          </div>
        </div>
      </div>
    </div>
  );
});

export default Home;
