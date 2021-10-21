import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import { Link } from 'react-router-dom';
import { getLogout } from '../actions/user';



export default function Profile() {
	
	const currentUser = useSelector(state => state.user.currentUser);
	const dispatch = useDispatch();

	return (
		<div>
			<h1>
				Hello, {currentUser.login}
			</h1>
			<button onClick={() => dispatch(getLogout())}>Выйти</button> 
		</div>
	)
}
