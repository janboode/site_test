const say = 'B R Y T E'
const spacing = '7px';
const borderColor = '#eae7ff'
const styles =
    `
        padding: ${spacing};
        background-color: darkslateblue;
        color: white;
        font-style: normal;
        font-weight: bold;
        border: 2px solid ${borderColor};
        font-size: 1em;
        border-radius: 3px
    `
console.log(`%c${say}`, styles) 
import React from 'react'
import ReactDOM from 'react-dom'
import App from './app/App'
import { BrowserRouter } from 'react-router-dom'

import './scss/main.scss'

ReactDOM.render(
    // <BrowserRouter basename='/build'>
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
)