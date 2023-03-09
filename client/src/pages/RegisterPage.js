import { useState } from "react"

export default function RegisterPage() {
  const [username, setUsername] = useState ('')
  const [password, setPassword] = useState ('')

  
    return (
        <div>
          <form className="register">
          <h1> Register</h1>

            <input type="text" placeholder="username" value={username} onChange={ev => setUsername(ev.target.value)}/>
            <input type="password" placeholder="password"/>
            <button>Register</button>
          </form>
        </div>
    )
}