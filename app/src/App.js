import React, { Component } from 'react';
import './App.css';

import Routes from './routes';

class App extends Component {
	render() {
		// localStorage.setItem('theme', 'dark');
		return (
			<Routes />
		);
	}
}

export default App;
