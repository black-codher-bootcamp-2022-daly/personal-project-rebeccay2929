import { useState } from "react"

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
async function login(ev) {
    ev.preventDefault();
    const response =  await fetch ('http://localhost:8080/login', { 

    method: 'POST',
     body: JSON.stringify({username,password}),
     headers: {'Content-Type': 'application/json'},
    });
    if (response.ok) {
      setRedirect(true);

    } else {
      alert ('Incorrect credentials');
    }
  }
  if (redirect) {
    return <Navigate to ={'/'}/>
  } 
   
    return (
        <div>
          <form className="login">
            <h1> Login</h1>
            <input type="text" placeholder="username"/>
            <input type="password" placeholder="password"/>
            <button>Login</button>
          </form>
        </div>
    )
}