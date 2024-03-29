import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


document.addEventListener('mousemove', e => {
  let w = window.innerWidth;
  let h = window.innerHeight;
  let x = Math.round(e.pageX / w * 100);
  let y = Math.round(e.pageY / h * 100);
  document.querySelector('.App').style.background = `radial-gradient(at ${x}% ${y}%, #dd03e4, #5611ec)`;
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
