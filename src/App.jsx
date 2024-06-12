import { useState } from 'react'
import './App.css'
import "98.css";
import Cv from "./cv"

function App() {
  const [window, setWindow] = useState(false)

  const showWindow =()=>{
    console.log(window)
    if(window==true){
      setWindow (false)
    }else{setWindow(true)}
  }

  const handleClose = ()=>{
    setWindow(false)
    console.log(window)
  }
  return (
    <>
    <div className="parent">
<div className="div1" onDoubleClick={()=>{alert("euuuuuuuh")}}>
  <img className='icon' src="https://64.media.tumblr.com/7b1a9eb3789efa0e5570c62db6484d0e/tumblr_prx9qfzCdv1ubqz06_540.gif"></img>
  <p>Recycle<br/>Bin</p>
</div>

<div className="div2" onDoubleClick={showWindow} id='merci'>
    <img  className='icon'src='https://cdn2.steamgriddb.com/icon/2b515e2bdd63b7f034269ad747c93a42/4/512x512.png'></img>
    <p>Remerciements <br/>Uxen</p>
</div> 

<div className="div3" >
  <a href="mailto:goncalves.erwan.pro@gmail.com">
      <img className='icon' src="https://64.media.tumblr.com/59193b353822170f40579ce5d59db317/tumblr_prx9qfhsvH1ubqz06_540.gif"></img> </a>
      <p>Contact</p> 
  
</div>
</div>
<div className='message'>

{window && (<Cv onClose={handleClose}/>)}
</div>

<footer className='startbar'>
<img id='startbutton' src='https://i.redd.it/start-button-dont-let-them-take-the-bottom-left-lol-v0-ostbbhrivxq81.png?width=570&format=png&auto=webp&s=602833d9f990389facbc51dd08785d2b390f87b7'></img>
</footer>
    </>
  )
}




export default App
