import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from "react-redux";
import { Link } from 'react-router-dom';
import {findUser, getAuth, getLogout} from '../../actions/user';
import { useInput } from '../../hooks/useInput';
import styles from '../../scss/login.module.scss'

export default function Navbar() {

	const currentUser = useSelector(state => state.user.currentUser);
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
		<nav class="navbar navbar-expand-md navbar-dark bg-dark">
			<div class="container">
				<Link to="/" class="navbar-brand">Test-Task</Link>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false">
					<span class="navbar-toggler-icon"></span>

				</button>
				<div class="collapse navbar-collapse" id="navbarContent">
					<ul class="navbar-nav me-auto  mb-lg-0">
						<li class="nav-item"><Link to="/" href="" class="nav-link">Home</Link></li>
						<li class="nav-item"><Link to="/about" href="" class="nav-link">About us</Link></li>
						{currentUser.login &&
						<li class="nav-item"><Link to="/profile" href="" class="nav-link">Profile</Link></li>
						}
					</ul>
					<div class="d-flex">
					{!currentUser.login &&
						<button class="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#Modal">Sign In</button> 
					}
					{currentUser.login &&
						<button class="btn btn-outline-danger ms-3" onClick={() => dispatch(getLogout())}>Sign Out</button>
					}
					</div>
				</div>
			</div>
	</nav>

	<div class="modal fade" id="Modal" tabindex="-1" aria-hidden="true" aria-labelledby="modalLabel">
	<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
		<div class="modal-content" style={{color: 'black'}}>
		<div class="modal-header">
			<h5 class="modal-title">Sign In</h5>
			<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
		</div>
		<div class="modal-body">
			<form action="">
				<div class="row mb-3">
					<label for="inputLogin" class="col-sm-2 col-form-label">Login</label>
					<div class="col-sm-10">
						{((login.isMinLengthError || login.isEmpty)) && (<div className={styles.login__warning}>Min length 6 symbols</div>)}
						<input type="text" id="inputLogin" className={((login.isMinLengthError || login.isEmpty)) ? "form-control" : "form-control"} placeholder="login" value={login.value} onChange={(e) => login.onChange(e)} onBlur={(e) => login.onBlur(e)}/>
					</div>
				</div>
				<div class="row mb-3">
					<label for="inputPass" class="col-sm-2 col-form-label">Password</label>
					<div class="col-sm-10">
						{((password.isMinLengthError || password.isEmpty)) && (<div className={styles.login__warning}>Min length 6 symbols</div>)}
						<input type="password" id="inputPass" className={((password.isMinLengthError || password.isEmpty)) ? "form-control" : "form-control"} placeholder="password" value={password.value} onChange={(e) => password.onChange(e)} onBlur={(e) => password.onBlur(e)}/>
					</div>
				</div>
			</form>
		</div>
		<div class="modal-footer">
			<button type="button" class="btn btn-primary" data-bs-dismiss="modal" disabled={isDisable} onClick={() => dispatch(getAuth(login.value, password.value))}>Login</button>
		</div>
		</div>
	</div>
	</div>
	</div>
	)
}
