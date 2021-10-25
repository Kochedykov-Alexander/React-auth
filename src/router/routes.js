import About from "../pages/About"
import Main from "../pages/Main"
import Profile from "../pages/Profile"

export const privateRoutes = [
	{path: '/', component: Main, exact: true,  key: Date.now()},
	{path: '/profile', component: Profile, exact: true, key: Date.now()},
	{path: '/about', component: About, exact: true,  key: Date.now()}
]

export const publicRoutes = [
	{path: '/', component: Main, exact: true,  key: Date.now()},
	{path: '/about', component: About, exact: true,  key: Date.now()}
]