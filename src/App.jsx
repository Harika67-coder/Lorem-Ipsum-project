import { useState } from "react";
import SingleText from "./SingleText";
import text from "./data";
const App = () => {
  const [count,setCount]=useState(1);
  const [Text,setText]=useState([]);
  const generate=()=>{
    const newText=Array.from({length:count},(_,index)=>
  {
    return (text[index]);
  });
  setText(newText);
  }
  return <main style={{textAlign:"center",marginTop:"9.5rem"}}>
    <form onSubmit={(e)=>{
      e.preventDefault();
      generate();
    }}>
    <h4>TIRED OF BORING LOREM IPSUM</h4>
    <section className="section-container">
    <label htmlFor="amount" className="paragraph-label">Paragraphs:</label>
    <input type="number" min='1' max='8' className="number-input" value={count} name="amount" id="amount" onChange={(e)=>{
      setCount(e.target.value);
    }}/>
    <button type="submit" className="generate-button">
      Generate
    </button>
    </section>
    <SingleText Text={Text}/>
    </form>
  </main>
};
export default App;
