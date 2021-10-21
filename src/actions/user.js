import { deleteUser, setUser } from "../store/reducers/userReducer";

export const getAuth = (login, password) => {
	return dispatch => {
		dispatch(setUser({login: login, password: password}))
	}
}

export const getLogout= () => {
	return dispatch => {
		dispatch(deleteUser())
	}
}

export function findUser(login, password, users) {
	return users.find(user => user.login === login && user.password === password)
}


