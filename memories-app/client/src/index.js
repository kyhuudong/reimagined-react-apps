import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleWare, compose} from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';
import App from './App';

const store = createStore(reducers, compose(applyMiddleWare(thunk)));

ReactDOM.render(<App />, document.getElementById('root'));

