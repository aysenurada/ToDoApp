import { useEffect, useReducer } from "react";
import { createContext } from "react";
import ToDoReducer from "./ToDoReducer";

export const ToDoContext = createContext(null);

export function ToDoProvider({children}) {
  const localStorageId = "todoappstate";

  const initialState = localStorage.getItem(localStorageId)
    ? JSON.parse(localStorage.getItem(localStorageId))
    : [];
  const [todos, dispatch] = useReducer(ToDoReducer, initialState);

  useEffect( () => {
    localStorage.setItem(localStorageId, JSON.stringify(todos));
  }, [todos]);

  return (
    <ToDoContext.Provider value={{todos, dispatch}}>
      {children}
    </ToDoContext.Provider>
  )
}
