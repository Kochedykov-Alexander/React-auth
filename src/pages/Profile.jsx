import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import Navbar from '../components/Navbar/Navbar';
import styles from '../scss/profile.module.scss'



export default function Profile() {
	
	const currentUser = useSelector(state => state.user.currentUser);
	const dispatch = useDispatch();

	return (
		<div>
		<Navbar/>
		<div className="container">
			
			<div className="row justify-content-center">
			<div className={styles.profile + ' col-xs-12 col-sm-9 col-md-6 col-lg-6'}>
			<h1 className="profile__title">
				Hello, {currentUser.login}
			</h1>
		
		</div>
		</div>
		</div>
		</div>
	)
}
