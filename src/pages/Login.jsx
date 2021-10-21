import React, { useState, useEffect } from 'react';
import { findUser, getAuth } from '../actions/user';
import {useDispatch, useSelector} from "react-redux";
import { useInput } from '../hooks/useInput';


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
		<div>
			<h1>Вход</h1>

			{((login.isMinLengthError || login.isEmpty)) && (<div className='message'>Min length 6 symbols</div>)}
			<input type="text" className={((login.isMinLengthError || login.isEmpty)) ? "" : ""} placeholder="login" value={login.value} onChange={(e) => login.onChange(e)} onBlur={(e) => login.onBlur(e)}/>
			
			{((password.isMinLengthError || password.isEmpty)) && (<div className='message'>Min length 6 symbols</div>)}
			<input type="password" className={((password.isMinLengthError || password.isEmpty)) ? "" : ""} placeholder="password" value={password.value} onChange={(e) => password.onChange(e)} onBlur={(e) => password.onBlur(e)}/>
	
			
			<button disabled={isDisable} onClick={() => dispatch(getAuth(login.value, password.value))}>Войти</button>
			
		</div>
	)
}
