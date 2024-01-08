import { createContext, useReducer } from "react";

export const ToDoContext = createContext({} as TContextProvider);

// ** create type for context:

type TContextProvider = {
   state: TTodo[];
   dispatch: React.Dispatch<TAction>;
};
// ** create a type for context provider :
interface IContextProvider {
   children: React.ReactNode;
}

// ** Declare type for initialState:
export type TTodo = {
   id: string;
   title: string;
   isCompleted: boolean;
};

// ** declare an action type:
type TAction = {
   type: "addTodo" | "complete";
   payload: TTodo | string;
};

// ** define initial state:
const initialState: TTodo[] = [];

// ** define a reducer function:

const reducer = (currentState: TTodo[], action: TAction) => {
   switch (action.type) {
      case "addTodo":
         return [...currentState, action.payload as TTodo];
      case "complete":
         return currentState.map((item) => {
            return item.id === action.payload
               ? { ...item, isCompleted: !item.isCompleted }
               : item;
         });
      default:
         return currentState;
   }
};
const TodoProvider = ({ children }: IContextProvider) => {
   const [state, dispatch] = useReducer(reducer, initialState);

   const values: TContextProvider = { state, dispatch };
   return (
      <ToDoContext.Provider value={values}>{children}</ToDoContext.Provider>
   );
};

export default TodoProvider;
