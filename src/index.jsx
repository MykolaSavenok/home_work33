import React from 'react';
import ReactDOM from 'react-dom/client';
import * as rootStyles from './index.module.scss'
import App from './App.jsx';


const rootEl = document.getElementById('root');
const root = ReactDOM.createRoot(rootEl);

rootEl.classList.add(rootStyles.container);

root.render(<App />);
