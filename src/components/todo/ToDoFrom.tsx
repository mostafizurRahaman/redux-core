import { FormEvent, useContext, useState } from "react";
import { TTodo, ToDoContext } from "../../context/TodoProvider";
import TodoList from "./TodoList";

const ToDoFrom = () => {
   const { state, dispatch } = useContext(ToDoContext);
   const [task, setTask] = useState<TTodo>({
      id: "",
      title: "",
      isCompleted: false,
   });

   console.log(state);
   // ** create a function which handle our Form:
   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const newTask = {
         ...task,
         id: Math.random()
            .toString(36)
            .substring(2, 6 + 2),
      };
      setTask(newTask);
      dispatch({ type: "addTodo", payload: newTask });
   };

   return (
      <div className="flex items-center justify-center h-screen">
         <div className="w-1/2 p-5  bg-purple-400 rounded-lg">
            <TodoList></TodoList>
         </div>
         <div className="bg-violet-400 px-10 py-12 rounded-lg w-[1/2] mx-auto h-[300px]">
            <h1 className="text-lg font-bold font-white capitalize text-center  underline">
               Add Todo
            </h1>
            <div>
               <form
                  onSubmit={(e) => handleSubmit(e)}
                  className=" flex flex-col gap-5 items-center justify-center"
               >
                  <div className="flex flex-col gap-2 w-full">
                     <label
                        className="text-black uppercase font-bold"
                        htmlFor="task"
                     >
                        task
                     </label>
                     <input
                        type="text"
                        name="title"
                        id="task"
                        onChange={(e) =>
                           setTask({ ...task, title: e.target.value })
                        }
                        placeholder="your task name"
                        className="py-2 px-3 placeholder:text-orange-500 rounded-lg border border-black text-lg text-black"
                     />
                  </div>
                  <button
                     className="bg-black text-white px-5 py-2  rounded-lg "
                     type="submit"
                  >
                     Submit
                  </button>
               </form>
            </div>
         </div>
      </div>
   );
};

export default ToDoFrom;
