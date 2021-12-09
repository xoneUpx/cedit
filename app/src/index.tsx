import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AuthProvider from './auth/AuthProvider';
import { BrowserRouter } from 'react-router-dom';
import  ReduxProvider  from './redux/store/ReduxProvider'
import CustomThemeProvider from './theme/CustomThemeProvider'

ReactDOM.render(
  <React.StrictMode>
  <ReduxProvider>
  <BrowserRouter>
  <AuthProvider>
  <CustomThemeProvider>
    <App name="lol" />
  </CustomThemeProvider>
  </AuthProvider>
  </BrowserRouter>
  </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
