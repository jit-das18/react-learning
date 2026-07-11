import { useState } from "react";
function app(){
  const [count,setCount]=useState(0);
  function increase(){
        setCount(count+1);
      }
     
  function Decrease(){
      if (count>0){
        setCount(count-1);
      } 
    }
    function increase5(){
      
        setCount(count+5);
      }
     function decrease5(){
      if (count>=5){
        setCount(count-5);
      }
    }


  return (
    <>
    <h2>Counter App</h2>
    <b>Counter: {count}</b>
    <h3>{count > 0 ? "positive" : "zero"}</h3>
    {count === 10 ?(<h2>you have reached 10!</h2>):(<h2>keep going....</h2>)}
    <button onClick = {increase}>
      +
    </button>
    
     <button onClick = {Decrease}>
      -
    </button>
    <button onClick = {increase5}>
      increase by 5
    </button>
    <button onClick = {decrease5}>
      Decrease by 5
    </button>

     <button onClick = {()=>setCount(0)}>
      Reset
    </button>
     
    </> 

  );
}
export default app;