import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);
  // const [age,setAge] =useState()

  const handleChange = (value) => {
    setCounter(counter + value);
  };

  return (
    <div>
      <h3>Counter: {counter}</h3>
      <button
        onClick={() => {
          handleChange(1);
        }}
      >
        Add
      </button>
      <button
        onClick={() => {
            if(counter>0){
                handleChange(-1);
            }
         
        }}
      >
        Substract
      </button>
      <button
        onClick={() => {
          setCounter(counter * 2);
        }}
      >
        Double
      </button>
    </div>
  );
}
