import '@fortawesome/fontawesome-free/js/all.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider} from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './redux/rootReducer'
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


