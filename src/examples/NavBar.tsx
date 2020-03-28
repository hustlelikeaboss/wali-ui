import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from '@emotion/styled';

import Demo from './Demo';
import Playground from './Playground';

const NavBar = styled.div`
	display: flex;
	justify-content: space-between;

	> nav > ul {
		display: flex;
		align-items: flex-start;

		> li {
			list-style-type: none;
			text-decoration: none !important;
			margin: 0.5rem;
			padding: 1rem;

			&:hover {
				background-color: rgb(210, 232, 255, 0.5);
			}
		}
	}
`;

export default () => {
	return (
		<Router>
			<NavBar>
				<h1>React Gallery</h1>
				<nav>
					<ul>
						<li>
							<Link to="/">Demo</Link>
						</li>
						<li>
							<Link to="/playground">Playground</Link>
						</li>
					</ul>
				</nav>
			</NavBar>

			<Switch>
				<Route exact path="/">
					<Demo />
				</Route>
				<Route path="/playground">
					<Playground />
				</Route>
			</Switch>
		</Router>
	);
};
