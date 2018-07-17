import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router} from 'react-router-dom';
import store from './Redux/Store';
import './Css/index.css';
import Container from './Components/Container';
import Header from './Components/Header';
import Footer from './Components/Footer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
		<Provider store={store}>
			<Router>
				<main>
					<Header />
					<Container />
					<Footer />
				</main>
			</Router>
		</Provider>
	, document.getElementById('root'));
registerServiceWorker();
