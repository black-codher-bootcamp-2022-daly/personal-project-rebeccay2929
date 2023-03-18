import {Link} from "react-router-dom";
import { useEffect, useState } from "react";


export default function Header(){
  const [username, setUsername] = useState(null)
  useEffect(() => {
    fetch('htttp://localhost:8080/profile', {
      credentials: 'include',
    }).then(response => {
       response.json().then(userInfo  => {


      })
    })
  },[])
    return( 

<header>
          <Link to = "/" className="logo"> My Blog</Link>
          <nav> 
            <Link to="/login"> Login</Link>
            <Link to="/register"> Register</Link>
           
          </nav>   
        </header>
    )}