import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import 'antd/dist/antd.css'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
