import { useState } from "react";
import github from "../../assets/logo-vertical.svg";

import { Link } from 'react-router-dom';
import Error from "../../components/Error";

import './style.scss'

export default function Home() {
  const [user, setUser] = useState('');

  return (
    <div className="container">

      <img src={github} alt="github" />
      <input
        type="text"
        placeholder="Enter user name"
        onChange={(e) => setUser(e.target.value)}
      />

      {user.trim() ? <Link className="button" to={"/search/" + user}>Search</Link> : <Error />}


    </div>
  )
}