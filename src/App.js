import "./App.css";
import Register from "./components/Register";
import React,{useState} from 'react'
import Member from "./components/Member";
import { Routes,Route} from "react-router-dom";
function App() {
 
  const [members,setmembers]=useState([
  ])

  return (
    <>
    <Routes>
  
      <Route path="/" element={<Register members={members
      } setmembers={setmembers} />}/>
      <Route path="/member" element={<Member  members={members
      }/>}/>
    
    </Routes>
    </>
  );
}

export default App;
