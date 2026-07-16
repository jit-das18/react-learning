import { useState } from "react";
function app(){
  const [name,setName]=useState("");
  const [show,setShow]=useState(true);
  const[showPassword,setShowPassword]=useState(false);
  const [email,setEmail]=useState("");
  const [city,setCity]=useState("");
  return (
    <>
    <input type="text" placeholder="Enter your name" onChange={(e) =>setName(e.target.value)}/>
    <input type="email" placeholder="Enter your email" onChange={(e) =>setEmail(e.target.value)}/>
    <input type="text" placeholder="Enter your city" onChange={(e) =>setCity(e.target.value)}/>
    <h1>Name: {name}</h1>
    <h1>Email: {email}</h1>
    <h1>City: {city}</h1>
    <button onClick={()=>setShow(!show)}>
      Toggle
    </button>
    {show&&<h2>React is awesome🎉</h2>}
    <input type={showPassword?"text":"password"} placeholder="enter password"/>
    <button onClick={()=>setShowPassword(!showPassword)}>
    show/hide
    </button>
    </> 




  );














}
export default app;



























