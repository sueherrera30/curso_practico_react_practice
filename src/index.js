import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import HolaMundo from './HolaMundo';
import Button from './Components/Button';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<Button text="hola soy botoncito, mucho gosto" name="Hola soy sue, click me :D "></Button>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
