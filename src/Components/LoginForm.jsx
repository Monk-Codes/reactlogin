import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
 const [username, setUsername] = useState("");
 const [password, setPassword] = useState("");
 const [error, setError] = useState("");
 const navigate = useNavigate(); // Initialize useNavigate hook

 const login = (e) => {
  setError("");
  // Your login logic here

  // After successful login, redirect to signup page
  navigate("/signup");
 };

 const loginFormHandler = (e) => {
  e.preventDefault();
  login();
 };

 return (
  <div>
   <h2>Login</h2>
   <form onSubmit={loginFormHandler}>
    <input type="text" name="Username" placeholder="Username" id="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
    <input type="password" name="Password" placeholder="Password" id="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
    <input type="submit" value="Login" />
   </form>
   {error && <p>{error}</p>}
  </div>
 );
}
