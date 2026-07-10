import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Footer from "./Footer";
import Card from "./Card";
import Student from "./Student";
import Profilecard from "./Profilecard";
function App(){
  return(
    <>
    <Profilecard name="Jit Das" role="future full stack developer" age={22} college="brainware university" city="Barasat"skills="Python,java,javascript,web development" role="Fresher"/>
    <Profilecard name="Aman" role="frontend developer" age={23} college="Adamas University" city="kolkata"skills="java,c,c++,bootstrap,php" role="fresher"/>
    <Profilecard name="moupriya" role="backend developer" age={22} college="brainware university" city="Nandigram"skills="can talk sweetly,intelligence,art,sing,mind scrapper" role="intermediate"/>
    <Profilecard name="Shrabanti Das" role="makeup  artist" age={32} college="Barasat College" city="Barasat" skills="nail painting,bridal mackup,nail design" role="Professional"/>
  
  

    </>
  );
  }
export default App;