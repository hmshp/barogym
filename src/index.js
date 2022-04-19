import '@fortawesome/fontawesome-free/js/all.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import 'react-quill/dist/quill.snow.css';

ReactDOM.render(
  <React.StrictMode>
      <Router basename={process.env.PUBLIC_URL}>
        <App />
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


