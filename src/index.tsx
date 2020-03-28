import React from 'react';
import { render } from 'react-dom';

import Home from './components/Home';
import './styles/main.css';

const App = () => (
	<div id="app">
		<Home />
	</div>
);

render(<App />, document.getElementById('root'));
