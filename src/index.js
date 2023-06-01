import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import App from './App';
import Contact from './Components/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    {/* <Contact contact={{"id":1,"name":"DEV","mobileNumber":8309444929,"emailId":"mkreddy@gmail.com","gender":"male","image":"/images/dev.jpg"}}/> */}
    </BrowserRouter>
  </React.StrictMode>
);
