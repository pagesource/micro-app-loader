import Loader from "../component/Loader/Loader";
import styles from "../styles/Home.module.css";
import React, { useState } from "react";
export default function Home() {
  const [count,setCount] = useState(0)
  return (
    <div className={styles.container}  >
     
      <Loader url='http://localhost:5000/manifest.json'  loading={<h3>loading ...</h3>} appdata= {{"count":count}} namespace='headerApp' selector='headercontainer'/>
      <button id="test" onClick={()=>setCount(count+1)}> Loader {count}</button>
      <Loader url='http://localhost:5001/manifest.json'  loading={<h3>loading ...</h3>} appdata= {{"count":count} }namespace='footerApp' selector='footercontainer'/>
  
    </div>
  );
}
