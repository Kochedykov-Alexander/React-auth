//actions

const SET_USER = "SET_USER"
const DELETE_USER = "DELETE_USER" 

export const defaultState = {
    currentUser: {},
	users: [{login: 'developer21', password: '123456'}],
    isAuth: false
}

//reducer

export default function userReducer(state = defaultState, action){
    switch (action.type) {
		case SET_USER: 
			return {
				...state, 
				currentUser: action.payload,
				isAuth: true
			
			}
			
		case DELETE_USER:
			return {
				...state, 
				currentUser: {},
				isAuth: false
			}
        default:
            return state
    }
}


//action creators

export const setUser = (user) => ({type: SET_USER, payload: user})

export const deleteUser = () => ({type: DELETE_USER})