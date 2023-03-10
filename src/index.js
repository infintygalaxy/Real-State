import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // import Provider from react-redux
import './index.css';
import App from './App';
import store from './Store'; // import store from ./Store

// Create a root element using createRoot() from ReactDOM
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the application inside the root using the Provider component
// The Provider component wraps the App component and provides access to the Redux store
root.render(
  <React.StrictMode>
    <Provider store={store}> {/* The Provider component should receive the prop 'store', not 'Store' */}
      <App />
    </Provider>
  </React.StrictMode>
);
