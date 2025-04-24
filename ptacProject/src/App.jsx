import { useState } from "react";
import { useNavigate } from "react-router"; // From 'react-router' in new versions
import { auth } from "./config/firebaseCFG";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function App() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate();

  const firebaseAuth = async (event_i) => {
    event_i.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, pass);
      alert("Logged in");
      navigate("/");
    } catch (err) {
      alert(`Erm, what the sigma? ${err.message}`);
    }
  };

  return (
    <main>
      <form onSubmit={firebaseAuth}>
        <label htmlFor="email">Email</label>
        <input 
          id="email"
          name="e-mail"
          type="email"
          value={email}
          onChange={(event_i) => setEmail(event_i.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          value={pass}
          onChange={(event_i) => setPass(event_i.target.value)}
        />
        
        <button id="submit">Submit</button>
      </form>
    </main>
  );
}
