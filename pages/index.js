import Loader from "../component/Loader/Loader";
import styles from "../styles/Home.module.css";
import React, { useState } from "react";
export default function Home() {
  const [count,setCount] = useState(0)
  return (
    <div className={styles.container}  >
      <div style ={{textAlign:'center'}}>
        
        <h3>load header inside this div</h3>
        <div id="testdiv">
        </div>
        <h3>load header inside this div</h3>
        
      </div>
      <Loader url='http://localhost:5000/manifest.json' identifier ="headerloader" loading={<h3>loading ...</h3>} appdata= {{"count":count}} namespace='headerApp' selector='testdiv'/>
      <button id="test" onClick={()=>setCount(count+1)}> Loader {count}</button>
      <Loader url='http://localhost:5001/manifest.json' identifier = "footerloader" loading={<h3>loading ...</h3>} appdata= {{"count":count} }namespace='footerApp' />
      <Loader url='http://localhost:5002/counter.js' identifier="webcomponentloader" loading={<h3>loading ...</h3>} >
      <web-counter name-attribute={count}></web-counter>
      </Loader>      
    </div>
  );
}
