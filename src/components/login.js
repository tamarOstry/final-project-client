import '../css/login.css'
import '../api/nurse'
import React from 'react'
import { useState } from "react";
import { logIn } from "../api/nurse";
import { Register } from "../api/nurse";
import { useHistory } from "react-router-dom";


export default function LoginForm() {
	const history = useHistory();
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const [phonNumber, setPhoneNumber] = useState("");


	async function onLogIn() {
		await logIn(userName, password).then(data => {
			if (data) {
				alert("התחברת בהצלחה")
				history.push("/searchBaby");
			}
			else {
				alert("user not defined")
			}

		});
		//if(nurse)  
		//setNurse(nurse)
	}

	async function onRegister() {
		await Register(firstName, lastName, userName, password, email, phonNumber).then(()=>{
			window.location.reload();
		})
	}

	return (
		<div className="login-wrap">
			<div className="login-html">
				<input id="tab-1" type="radio" name="tab" className="sign-in" /><label htmlFor="tab-1" className="tab">Sign In</label>
				<input id="tab-2" type="radio" name="tab" className="sign-up" /><label htmlFor="tab-2" className="tab">Sign Up</label>
				<div className="login-form">
					<div className="sign-in-htm" >
						<div className="group">
							<label htmlFor="user" className="label">Username</label>
							<input id="user" type="text" className="input" onChange={userName => setUserName(userName.target.value)} />
						</div>
						<div className="group">
							<label htmlFor="pass" className="label">Password</label>
							<input id="pass" type="password" className="input" data-type="password" onChange={(password) => setPassword(password.target.value)} />
						</div>
						<div className="group">
							<input id="check" type="checkbox" className="check" />
							<label htmlFor="check"><span className="icon"></span> Keep me Signed in</label>
						</div>
						<div className="group">
							<input className="button" value="Sign In" onClick={() => onLogIn()} />
						</div>
						<div className="hr"></div>
						{/* <div className="foot-lnk">
					<a href="#forgot">Forgot Password?</a>
				</div> */}
					</div>
					<div className="sign-up-htm" >
						<div className="group">
							<label htmlFor="user" className="label">first name</label>
							<input id="user" type="text" className="input" onChange={firstName => setFirstName(firstName.target.value)} />
						</div>
						<div className="group">
							<label htmlFor="user" className="label">last name</label>
							<input id="user" type="text" className="input" onChange={lastName => setLastName(lastName.target.value)} />
						</div>
						<div className="group">
							<label htmlFor="user" className="label">user name</label>
							<input id="user" type="text" className="input" onChange={userName => setUserName(userName.target.value)} />
						</div>
						<div className="group">
							<label htmlFor="pass" className="label">password</label>
							<input id="pass" type="password" className="input" data-type="password" onChange={password => setPassword(password.target.value)} />
						</div>
						<div className="group">
							<label htmlFor="pass" className="label">email address</label>
							<input id="pass" type="text" className="input" onChange={email => setEmail(email.target.value)} />
						</div>
						<div className="group">
							<label htmlFor="pass" className="label">phone number</label>
							<input id="pass" type="text" className="input" onChange={phoneNumber => setPhoneNumber(phoneNumber.target.value)} />
						</div>
						<div className="group">
							<input className="button" value="Sign Up" onClick={() => onRegister()} />
						</div>
						<div className="hr"></div>
						{/* <div className="foot-lnk">
					<label htmlFor="tab-1">Already Member?</label>
				</div> */}
					</div>
				</div>
			</div>
		</div>
	)
}



