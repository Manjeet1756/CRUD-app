import React, {useState} from 'react';
import app from "../firebaseConfig";
import { getDatabase, ref, set, push } from "firebase/database";
import { useNavigate } from 'react-router-dom';

function Write() {

  const navigate = useNavigate();

  let [inputValue1, setInputValue1] = useState("");
  let [inputValue2, setInputValue2] = useState("");

  const saveData = async () => {
    const db = getDatabase(app);
    const newDocRef = push(ref(db, "students "));

    await  set(newDocRef, {
      Name: inputValue1,
      Email: inputValue2
    }).then( () => {
      alert("data saved successfully")
      
    }).catch((error) => {
      alert("error: kuch to locha h bhiaya", error.message);
    })
  }


  return (
    <div>

      <h1>Student Data</h1>

      <input type='text' value={inputValue1} placeholder="Name"
      onChange={(e) => setInputValue1(e.target.value)} required/> 
        <br/>
      <input type='text' value={inputValue2}  placeholder="Email"
      onChange={(e) => setInputValue2(e.target.value)} required/> <br/>

      <button onClick={saveData}>SAVE DATA</button>
      <br />
      <br />
      <br />
      <button className='button1' onClick={ () => navigate("/updateread")}>GO UPDATE READ</button> <br />
      <button className='button1' onClick={ () => navigate("/read")}>GO READ PAGE</button>
    </div>
  )
}

export default Write