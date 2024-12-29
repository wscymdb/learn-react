import React, { createElement } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import './jsxHandler'
import { render } from './jsxHandler'

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<App />)

const ele = /*#__PURE__*/ React.createElement(
  'div',
  {
    id: 'a',
    style: {
      color: 'red',
    },
  },
  /*#__PURE__*/ React.createElement('span', null, 'hello'),
  /*#__PURE__*/ React.createElement(
    'span',
    {
      class: 'abc',
    },
    'hi'
  ),
  /*#__PURE__*/ React.createElement('span', null, '\u4F60\u597D')
)

// console.log(ele)

render(ele, document.getElementById('root'))
