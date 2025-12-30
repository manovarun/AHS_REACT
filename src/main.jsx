import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import 'aos/dist/aos.css';
import 'flatpickr/dist/flatpickr.min.css';
import 'lightgallery/css/lightgallery-bundle.css';

import './styles/main.css';
import './styles/custom.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
