import { useContext } from "react";
import { ToDoContext } from "../../context/TodoProvider";

const ToDoFrom = () => {
   const {} = useContext(ToDoContext);
   return (
      <div>
         <h1>Todo Application</h1>
      </div>
   );
};

export default ToDoFrom;
