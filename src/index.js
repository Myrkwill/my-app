import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
	{ id: 1, message: 'message1', likesCount: 12 },
	{ id: 2, message: 'message2', likesCount: 0 },
	{ id: 3, message: 'message3', likesCount: 7 },
	{ id: 4, message: 'message4', likesCount: 2 },
]

let dialogs = [
	{ id: 1, name: 'Mark' },
	{ id: 2, name: 'Mark1' },
	{ id: 3, name: 'Mark2' },
	{ id: 4, name: 'Mark3 ' },
]

let messages = [
	{ id: 1, message: 'Hi!' },
	{ id: 2, message: 'hi2' },
	{ id: 3, message: 'hi2' },
	{ id: 4, message: 'hi5 ' },
]



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
