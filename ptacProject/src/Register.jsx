import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "./config/firebaseCFG";
import { useNavigate } from "react-router"; 

export default function Register() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate(); 

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, pass); 
      navigate('/login'); 
    } catch (err) {
      alert("Skibidi error occurred: " + err.message); 
    }
  };

  return (
    <div>
      <main>
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <input 
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input 
            type="password"
            placeholder="Pass"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            required
          />
          <button type="submit">Register</button>
        </form>
      </main>
    </div>
  );
}
