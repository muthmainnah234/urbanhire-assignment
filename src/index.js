import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Profile from './components/Profile';
import CustomNavbar from './components/CustomNavbar';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<div>
		<CustomNavbar />
		<Profile/>
	</div>, 
	document.getElementById('root'));
registerServiceWorker();
