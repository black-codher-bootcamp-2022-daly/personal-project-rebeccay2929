import { useState } from "react";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  async function register(ev) {
    ev.preventDefault();

    await fetch("http://localhost:8080/register", {
      method: "POST",
      body: JSON.stringify({ username, password, email }),
      headers: { "Content-Type": "application/json" },
    });
  }

  return (
    <div className="register">
      <span className="registerTitle"> Register</span>
      <form className="registerForm" onSubmit={register}>
      
      <label>
          <input
            className="registerInput"
            type="text"
            placeholder="email"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />
        </label>

        <label>
          <input
            className="registerInput"
            type="text"
            placeholder="username"
            value={username}
            onChange={(ev) => setUsername(ev.target.value)}
          />
        </label>

        <label>
          <input
            className="registerInput"
            type="password"
            placeholder="password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />
        </label>

       

        <button className="registerButton">Register</button>
      </form>
    </div>
  );
}
