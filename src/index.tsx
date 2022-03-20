import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import reportWebVitals from 'reportWebVitals';
import i18n from 'utils/i18next';
import { GlobalReducerContextProvider } from 'providers/GlobalReducerContextProvider';
import App from 'App';
import 'index.css';

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <GlobalReducerContextProvider>
          <App />
        </GlobalReducerContextProvider>
      </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

const updateVh = () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

updateVh();

window.addEventListener('resize', () => {
  updateVh();
});
