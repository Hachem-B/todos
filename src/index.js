import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';//to make the Redux store available to any nested components
import { createStore } from 'redux';//holds the complete state tree of the app
import rootReducer from './reducers';//combines all reducers into one
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer);

ReactDOM.render(
   <Provider store={ store }>  {/* making the states from the store accessible */}
    <App />
  </Provider>, 
  document.getElementById('root')
);

serviceWorker.unregister();
