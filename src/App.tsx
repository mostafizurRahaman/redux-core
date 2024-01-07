import ToDoFrom from "./components/todo/ToDoFrom";

import TodoProvider from "./context/TodoProvider";

function App() {
   return (
      <TodoProvider>
         <div>
            <ToDoFrom></ToDoFrom>
         </div>
      </TodoProvider>
   );
}

export default App;
