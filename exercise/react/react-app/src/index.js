import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Game from './game';//需要引入game，才会执行，但这个引入并没有什么用处
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
