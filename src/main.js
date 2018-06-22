import React from 'react';
import { render as renderDom } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import App from './components/app/app';
import reducers from './reducer/combine-reducers';
import thunk from './lib/redux-thunk';
import '../styles/main.scss';


const store = createStore(reducers, applyMiddleware(thunk));

const appContainer = document.createElement('div');
document.body.appendChild(appContainer);

renderDom(<Provider store={store}><App/></Provider>, appContainer);
