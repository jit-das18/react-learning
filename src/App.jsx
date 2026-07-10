import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Footer from "./Footer";
import Card from "./Card";
import Student from "./Student";
function App(){
  return(
    <>
    <Student name="Jit Das" role="future full stack developer" age={22} college="brainware university" city="Barasat"/>
    <Student name="Aman" role="frontend developer" age={23} college="Adamas University" city="kolkata"/>
    <Student name="moupriya" role="backend developer" age={22} college="brainware university" city="Nandigram"/>
    <Student name="Shrabanti Das" role="makeup  artist" age={32} college="Barasat College" city="Barasat"/>
  
  

    </>
  );
  }
export default App;