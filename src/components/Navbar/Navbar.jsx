import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import { Link } from 'react-router-dom';
import { getLogout } from '../../actions/user';
import styles from '../../scss/navbar.module.scss'
import logo from '../../resources/img/react.png'

export default function Navbar() {

	const currentUser = useSelector(state => state.user.currentUser);
	const dispatch = useDispatch();


	return (
		<header>
		
		<nav class="navbar navbar-expand-md navbar-dark bg-dark">
		<div className="container-xxl">
			<a class="navbar-brand" href="#">
				<img src={logo}  width="30" height="30" alt="" />
			</a>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav me-auto mb-2 mb-lg-0">
				<li class={styles.item__link + " nav-item"}>
					<Link to = "/profile"><a class={styles.item__link + " nav-link"}  href="#">Profile</a></Link>
				</li>	
			</ul>
			{currentUser && 
				<button type="button" class="btn btn-danger" onClick={() => dispatch(getLogout())}>Выйти</button> 
			}
			</div>
		</div>
		</nav>
		
		
		</header>
	)
}
