import { useState } from "react";

interface IUser {
   name: string;
   age: number;
   hobbies: string[];
}

const UserInfoWithState = () => {
   const [user, setUser] = useState<IUser>({ name: "", age: 0, hobbies: [] });
   console.log(user);
   return (
      <form className="border-2 border-black bg-purple-500 rounded-2xl flex items-center justify-center gap-5 w-full px-10 py-10 text-black ">
         <input
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            type="text"
            id="name"
            name="name"
            placeholder="name"
         />
         <input
            onChange={(e) =>
               setUser({ ...user, age: parseInt(e.target.value) })
            }
            type="number"
            id="age"
            name="age"
            placeholder="age"
         ></input>
         <input
            onBlur={(e) => {
               setUser({ ...user, hobbies: [...user.hobbies, e.target.value] });
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

export default UserInfoWithState;
