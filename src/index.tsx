import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {StateProvider} from "./core/store/store";

const application = (
    <StateProvider>
        <App />
    </StateProvider>
)

ReactDOM.render(application, document.getElementById('root'));
