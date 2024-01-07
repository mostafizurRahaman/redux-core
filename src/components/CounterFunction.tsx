interface IProps {
   count: number;
   setCount: React.Dispatch<React.SetStateAction<number>>;
}

const CounterFunction = ({ count, setCount }: IProps) => {
   return (
      <div className="p-10 rounded-lg border-2 bg-violet-600 text-white flex justify-center items-center">
         <button
            className="px-5 py-2 rounded-lg bg-white text-black text-lg"
            onClick={() => setCount((prev) => prev + 1)}
         >
            {count}
         </button>
      </div>
   );
};

export default CounterFunction;
