import { useState } from "react"
import { auth } from "./config/firebaseCFG";
import {signInWithEmailAndPassword} from "firebase/auth"


export default function App(){
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

    const firebaseAuth = async (event_i) => {
      event_i.preventDefault();
      try{
        await signInWithEmailAndPassword(auth, email, pass);
        alert("Logged in")
      }catch(err){
        alert("Erm, what the sigma?", err)
      }
    }
  
  return(
  <main>
    <form onSubmit={firebaseAuth}/>
    <label htmlFor="email">Email</label>
    <input 
    id="email"
    name="e-mail"
    type="email"
    value={email}
    onChange={(event_i) => setEmail(event_i.target.value)}
     />
     
     <button id="submit">Submit</button>
  </main>
  )
}