import React, { useState, useEffect } from 'react';
import { findUser, getAuth } from '../actions/user';
import {useDispatch, useSelector} from "react-redux";
import { useInput } from '../hooks/useInput';
import styles from '../scss/login.module.scss'




export default function Login() {

	const dispatch = useDispatch();
	const users = useSelector(state => state.user.users)

	const login = useInput('', {isEmpty: true, minLength: 6});
	const password = useInput('', {isEmpty: true, minLength: 6});

	const [isDisable, setIsDisable] = useState(true);

	useEffect(() => {
		if (findUser(login.value, password.value, users)) {
			setIsDisable(false)
		}
		else {
			setIsDisable(true)
		}
	}, [login.value, password.value])



	return (
		
			<div className="container">

			<form className={"col-xs-12 col-sm-9 col-md-6 col-lg-6 " + styles.login}>
			<h1 style={{textAlign: 'center'}}>Вход</h1>
			<div class="mb-3">
				<label for="exampleInputEmail1" class="form-label">Login</label>
				{((login.isMinLengthError || login.isEmpty)) && (<div className={styles.login__warning}>Min length 6 symbols</div>)}
				<input type="text" className={((login.isMinLengthError || login.isEmpty)) ? "form-control" : "form-control"} placeholder="login" value={login.value} onChange={(e) => login.onChange(e)} onBlur={(e) => login.onBlur(e)}/>
			</div>
			<div class="mb-3">
				<label for="exampleInputPassword1" class="form-label">Password</label>
				{((password.isMinLengthError || password.isEmpty)) && (<div className={styles.login__warning}>Min length 6 symbols</div>)}
				<input type="password" className={((password.isMinLengthError || password.isEmpty)) ? "form-control" : "form-control"} placeholder="password" value={password.value} onChange={(e) => password.onChange(e)} onBlur={(e) => password.onBlur(e)}/>
			</div>
			<button type="submit" class="btn btn-success" disabled={isDisable} onClick={() => dispatch(getAuth(login.value, password.value))}>Войти</button>
			</form>
			
			
			{/* <h1 style={{textAlign: 'center'}}>Вход</h1>
			
			{((login.isMinLengthError || login.isEmpty)) && (<div className='message'>Min length 6 symbols</div>)}
			<input type="text" className={((login.isMinLengthError || login.isEmpty)) ? "col-xs-12 col-sm-9 col-md-4" : "col-xs-12 col-sm-9 col-md-4"} placeholder="login" value={login.value} onChange={(e) => login.onChange(e)} onBlur={(e) => login.onBlur(e)}/>
			
			{((password.isMinLengthError || password.isEmpty)) && (<div className='message'>Min length 6 symbols</div>)}
			<input type="password" className={((password.isMinLengthError || password.isEmpty)) ? "col-xs-12 col-sm-9 col-md-4" : "col-xs-12 col-sm-9 col-md-4"} placeholder="password" value={password.value} onChange={(e) => password.onChange(e)} onBlur={(e) => password.onBlur(e)}/>
	
			
			{/* <button disabled={isDisable} onClick={() => dispatch(getAuth(login.value, password.value))}>Войти</button> */}
			{/* <Button class="btn btn-success" disabled={isDisable} onClick={() => dispatch(getAuth(login.value, password.value))}>Success</Button> */}

			</div>
			
	)
}
