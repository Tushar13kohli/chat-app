import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './containers/App/App';
import { Login } from './components/Authentication/login';
import { Register } from './components/Authentication/register';

export const Routes = () => (
	<Router>
		<Switch>
			<Route path="/" exact component={App} />
			<Route path="/login" component={Login} />
			<Route path="/register" component={Register} />
		</Switch>
	</Router>
);
