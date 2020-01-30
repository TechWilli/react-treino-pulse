import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux';
// Importando a Lib de rotas
import { BrowserRouter } from 'react-router-dom'
import { store } from './redux/store';

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
				<App />
		</Provider>
	</BrowserRouter>, document.getElementById('root')
);

serviceWorker.unregister();

