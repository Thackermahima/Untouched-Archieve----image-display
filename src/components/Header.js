import React from "react";
import { useMoralis } from "react-moralis";
import { Link } from 'react-router-dom'
function Header() {
const {authenticate,isAuthenticated} = useMoralis()
const login = async () => {
    if (!isAuthenticated) {
      await authenticate({
        provider: "web3Auth",
        clientId: "BHQlt53J8Q_CprFI9tgx5aRB7pE9Ei0ccchzXQBNIYAI4RwdZ84Y2sVGoezEZ3S_kwwt3MuZ2eZIGoTYET--4I0",
      })
        .then(function (user) {
          console.log(user.get("ethAddress"));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
    return (
        <nav className="navbar navbar-light bg-light justify-content-between">
        <Link to="/">
        <img src="" alt="logo.img"></img>
        </Link>
     <Link to="upload-form">
            <button className="btn btn-primary" style={{ marginLeft:'76vw'}}>Upload form</button>
            </Link>

                <button onClick={(e)=>login(e)} className="btn btn-primary my-2 my-sm-0" type="submit">Connect</button>

                
        </nav>
    )
}

export default Header;




