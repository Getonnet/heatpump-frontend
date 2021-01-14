import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import './styles/style.scss'
import { Provider } from 'react-redux'
import store from './store/index'
import MobileUsersNotice from './mobileUsersNotice'

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import common_en from './locales/en/translation.json'
import common_nor from './locales/nor/translation.json'
import { BrowserRouter } from 'react-router-dom'

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: common_en,
      },
      nor: {
        translation: common_nor,
      },
    },
    lng: 'nor',
    fallbackLng: 'nor',

    interpolation: {
      escapeValue: false,
    },
  })

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {window.innerWidth < 1000 ? <MobileUsersNotice /> : <BrowserRouter ><App /></BrowserRouter>}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
