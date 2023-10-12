import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

// completeing the wrapping of all the file of redux here
import { configureStore } from '@reduxjs/toolkit'
// provider will flow the data within teh whole application
import {Provider} from 'react-redux'
import rootReducer from '../src/services/reducers/RootReducer'
//for middleware and delayed res in api call
// import thunk from 'redux-thunk';
// const store = configureStore({reducer:rootReducer, middleware:[thunk]})
const store = configureStore({reducer:rootReducer})
export default store
//creating store above

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    {/* sending data form rootReducer to store here */}
    <Provider store={store}>
    <App />
    </Provider>

  </React.StrictMode>
);



