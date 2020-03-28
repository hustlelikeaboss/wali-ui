import React from 'react';
import { render } from 'react-dom';

import './App.css';

import NavBar from './examples/NavBar';
import Footer from './examples/Footer';

const App = () => (
	<div id="app">
		<NavBar/>

		<Footer />
	</div>
);

render(<App />, document.getElementById('root'));
