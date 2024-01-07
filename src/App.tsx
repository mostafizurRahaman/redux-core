import UserInfoWithReducer from "./components/UserInfoWithReducer";
import UserInfoWithState from "./components/userInfoWithState";

function App() {
   return (
      <div className="bg-blue-500 rounded-lg p-10 border-2 border-black flex flex-col items-center justify-center text-white">
         <UserInfoWithReducer></UserInfoWithReducer>
      </div>
   );
}

export default App;
