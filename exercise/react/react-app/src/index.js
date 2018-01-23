import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Game from './game';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Game />, document.getElementById('game'));
registerServiceWorker();
