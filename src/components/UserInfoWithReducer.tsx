import { useReducer } from "react";

// ** initialState type:
interface IInitialState {
   name: string;
   age: number;
   hobbies: string[];
}

// ** actionType:
interface IAction {
   type: "addName" | "addAge" | "addHobbies";
   value: string;
}

const initialState: IInitialState = {
   name: "",
   age: 0,
   hobbies: [],
};

const reducer = (currentState: IInitialState, action: IAction) => {
   switch (action.type) {
      case "addName":
         return (currentState = { ...currentState, name: action.value });
      case "addAge":
         return (currentState = { ...currentState, age: Number(action.value) });
      case "addHobbies":
         return (currentState = {
            ...currentState,
            hobbies: [...currentState.hobbies, action.value],
         });
      default:
         return currentState;
   }
};

const UserInfoWithReducer = () => {
   const [state, dispatch] = useReducer(reducer, initialState);
   console.log(state);
   return (
      <form className="border-2 border-black bg-purple-500 rounded-2xl flex items-center justify-center gap-5 w-full px-10 py-10 text-black ">
         <input
            onChange={(e) =>
               dispatch({ type: "addName", value: e.target.value })
            }
            type="text"
            id="name"
            name="name"
            placeholder="name"
         />
         <input
            onChange={(e) =>
               dispatch({ type: "addAge", value: e.target.value })
            }
            type="number"
            id="age"
            name="age"
            placeholder="age"
         ></input>
         <input
            onBlur={(e) => {
               dispatch({ type: "addHobbies", value: e.target.value });
               e.target.value = "";
            }}
            type="text"
            id="hobbies"
            name="hobbies"
            placeholder="hobbies"
         ></input>
         <button>Submit</button>
      </form>
   );
};

export default UserInfoWithReducer;
