import { useContext } from "react";
import { ToDoContext } from "../../context/TodoProvider";
import { FaTrash } from "react-icons/fa";
const TodoList = () => {
   const { state, dispatch } = useContext(ToDoContext);

   return (
      <table
         style={{ border: "1px solid #fff" }}
         className="bg-purple-400 w-full"
      >
         <thead className="w-full">
            <tr className="border border-white w-full">
               <th className="border px-5 py-2 border-white">S.I</th>
               <th className="border px-5 py-2 border-white">Id </th>
               <th className="border px-5 py-2 border-white">Title</th>
               <th className="border px-5 py-2 border-white">isCompleted</th>
               <th className="border px-5 py-2 border-white">Action</th>
            </tr>
         </thead>
         <tbody className="text-center">
            {state.map((item, idx) => (
               <tr className="border  border-white" key={item.id}>
                  <td className="border px-5 py-2 border-white">{idx + 1}</td>
                  <td className="border px-5 py-2 border-white">{item.id}</td>
                  <td className="border px-5 py-2 border-white uppercase ">
                     <span className={item.isCompleted ? " line-through " : ""}>
                        {" "}
                        {item.title}
                     </span>
                  </td>
                  <td className="border px-5 py-2 border-white">
                     {item.isCompleted ? "close" : "pending"}
                  </td>
                  <td className=" text-red-600  font-bold border px-5 py-2 border-white">
                     <FaTrash
                        size={20}
                        onClick={() =>
                           dispatch({ type: "complete", payload: item.id })
                        }
                     ></FaTrash>
                  </td>
               </tr>
            ))}
         </tbody>
      </table>
   );
};

export default TodoList;
