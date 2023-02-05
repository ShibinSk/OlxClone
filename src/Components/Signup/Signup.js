import React, { useState,useContext} from "react";
// import { useHistory} from "react-router-dom";
import {useNavigate} from "react-router-dom"
import Logo from "../../olx-logo.png";
import { FirebaseConext } from "../../sore/firebaseContext";
import "./Signup.css";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const {firebase} = useContext(FirebaseConext);
  const navigate=useNavigate()
  // const history = useHistory();

const handleSubmir=(e)=>{
  e.preventDefault()
  console.log(firebase)
  firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
    result.user.updateProfile({displayName:username}).then(()=>{
      firebase.firestore().collection('users').add({
        id:result.user.uid,
        username:username,
        phone:phone
      }).then(()=>{
        navigate("/login")
   
      })

    })
  })

}

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form className="olxfrm" onSubmit={handleSubmir} >
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            id="lname"
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <div className="signbtn">
            <button>Signup</button>
          </div>
        </form>
        <a onClick={()=>{
          navigate('/login')
        }} >Login</a>
      </div>
    </div>
  );
}
