import Login from "../pages/Login"
import Profile from "../pages/Profile"

export const privateRoutes = [
	{path: '/profile', component: Profile, exact: true, key: Date.now()}
]

export const publicRoutes = [
	{path: '/', component: Login, exact: true,  key: Date.now()}
]