import React from 'react'
import {Route, Switch, Redirect } from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../router/routes'
import {useSelector} from "react-redux";

export default function AppRouter() {


	//объект авторизации

	const isAuth = useSelector(state => state.user.isAuth)

	return (
		
		//отрисовка доступных маршрутов по условию
		
		isAuth ?
		<Switch>
       		{privateRoutes.map(item => 
          		<Route path={item.path} component={item.component} exact={item.exact} key = {item.key}/>
        	)}
      		<Redirect to = "/profile"/>
		</Switch>
		:
		<Switch>
			{publicRoutes.map(item => 
				<Route path={item.path} component={item.component} exact={item.exact} key = {item.key}/>
			)}
			<Redirect to = "/"/>
		</Switch>
	)
}
