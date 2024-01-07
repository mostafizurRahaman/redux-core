import { createContext, useReducer } from "react";

//  * create a context :
export const ToDoContext = createContext({} as TContextValue);

// * define a type for context Values:
type TContextValue = {
   state: TTodo[];
   dispatch: React.Dispatch<TAction>;
};

// ** interface a Todo:
type TTodo = {
   id: string;
   title: string;
   isCompleted: boolean;
};

// ** action type:

type TAction = {
   type: "addToDo";
   payload: TTodo;
};
// ** define the initialState :
const initialState: TTodo[] = [];

// ** define the reducer function:
const reducer = (currentState: TTodo[], action: TAction) => {
   switch (action.type) {
      case "addToDo":
         return [...currentState, action.payload];
      default:
         return currentState;
   }
};

const TodoProvider = ({ children }: { children: React.ReactNode }) => {
   const [state, dispatch] = useReducer(reducer, initialState);
   const values: TContextValue = {
      state,
      dispatch,
   };

   return (
      <ToDoContext.Provider value={values}>{children}</ToDoContext.Provider>
   );
};

export default TodoProvider;
