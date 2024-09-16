import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
// import AuthProvider from 'react-auth-kit'
// import createStore from 'react-auth-kit/createStore'

// const store = createStore({
//   authName:'_auth',
//   authType:'cookie',
//   cookieDomain: window.location.hostname,
//   cookieSecure: window.location.protocol === 'https:',
// });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </React.StrictMode>,
)

{/* <React.StrictMode>
<AuthProvider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</AuthProvider>
</React.StrictMode> */}