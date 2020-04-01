import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './assets/styles/main.css';

import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import Dashboard from './components/pages/Dashboard';

const App = () => (
	<Router>
		<Switch>
			<Route exact path="/">
				<Home />
			</Route>
			<Route exact path="/login">
				<Login />
			</Route>
			<Route exact path="/signup">
				<Signup />
			</Route>
			<Route exact path="/dashboard">
				<Dashboard />
			</Route>
		</Switch>
	</Router>
);

render(<App />, document.getElementById('root'));
