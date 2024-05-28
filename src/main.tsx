import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { COMPUTED } from 'mobx/dist/internal'
import { UserStore } from './store/UserStore'
import { FilmStore } from './store/FilmStore'




export const Context = createContext<any>({})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Context.Provider value={{
      user: new UserStore(),
      film: new FilmStore()
      }}>
      <App />
    </Context.Provider>
 
  </React.StrictMode>,
)
