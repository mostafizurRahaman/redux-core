import React from "react";

class CounterClass extends React.Component {
   constructor() {
      super();
      this.state = {
         count: 0,
      };
   }

   render(): React.ReactNode {
      const { count } = this.state;
      console.log(count); 
      return (
         <button onClick={() => this.setState({ count: count + 1 })}>
            {count}
         </button>
      );
   }
}

export default CounterClass;
