import '../css/login.css'
import '../api/nurse'
import React from 'react'
import { useState } from "react";
import { logIn } from "../api/nurse";
import { Register } from "../api/nurse";
import {useHistory} from "react-router-dom";


export default function LoginForm(){
	const history=useHistory();
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const [phonNumber, setPhoneNumber] = useState("");

 
  async function onLogIn(){
    const nurse= await logIn(userName,password);
	history.push("/searchBaby");
  }

  async function onRegister(){
    const nurse= await Register(firstName,lastName,userName,password,email,phonNumber);
  }
 
  return (
	<div className="login-wrap">
	  <div className="login-html">
		<input id="tab-1" type="radio" name="tab" className="sign-in" /><label htmlFor="tab-1" className="tab">Sign In</label>
		<input id="tab-2" type="radio" name="tab" className="sign-up"/><label htmlFor="tab-2" className="tab">Sign Up</label>
		<div className="login-form">
			<form className="sign-in-htm" onSubmit={onLogIn}>
				<div className="group">
					<label htmlFor="user" className="label">Username</label>
					<input id="user" type="text" className="input" onChange={userName => setUserName(userName.target.value)}/>
				</div>
				<div className="group">
					<label htmlFor="pass" className="label">Password</label>
					<input id="pass" type="password" className="input" data-type="password" onChange={(password) => setPassword(password.target.value)}/>
				</div>
				<div className="group">
					<input id="check" type="checkbox" className="check" />
					<label htmlFor="check"><span className="icon"></span> Keep me Signed in</label>
				</div>
				<div className="group">
					<input type="submit" className="button" value="Sign In"/>
				</div>
				<div className="hr"></div>
				{/* <div className="foot-lnk">
					<a href="#forgot">Forgot Password?</a>
				</div> */}
			</form>
			<form className="sign-up-htm" onSubmit={onRegister}>
			    <div className="group">
					<label htmlFor="user" className="label">first name</label>
					<input id="user" type="text" className="input" onChange={firstName => setFirstName(firstName.target.value)}/>
				</div>
				<div className="group">
					<label htmlFor="user" className="label">last name</label>
					<input id="user" type="text" className="input" onChange={lastName => setLastName(lastName.target.value)}/>
				</div>
				<div className="group">
					<label htmlFor="user" className="label">user name</label>
					<input id="user" type="text" className="input" onChange={userName => setUserName(userName.target.value)}/>
				</div>
				<div className="group">
					<label htmlFor="pass" className="label">password</label>
					<input id="pass" type="password" className="input" data-type="password" onChange={password => setPassword(password.target.value)}/>
				</div>
				<div className="group">
					<label htmlFor="pass" className="label">email address</label>
					<input id="pass" type="text" className="input"  onChange={email => setEmail(email.target.value)}/>
				</div>
				<div className="group">
					<label htmlFor="pass" className="label">phone number</label>
					<input id="pass" type="text" className="input" onChange={phoneNumber => setPhoneNumber(phoneNumber.target.value)}/>
				</div>
				<div className="group">
					<input type="submit" className="button" value="Sign Up"/>
				</div>
				<div className="hr"></div>
				{/* <div className="foot-lnk">
					<label htmlFor="tab-1">Already Member?</label>
				</div> */}
			</form>
		</div>
	</div>
</div>

    )}
  


