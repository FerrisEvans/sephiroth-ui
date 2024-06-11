import React from 'react'
import ReactDOM from 'react-dom/client'
import 'reset-css'
import './index.scss'
import App from './App.tsx'
import {BrowserRouter} from "react-router-dom";
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "@/dev";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <DevSupport ComponentPreviews={ComponentPreviews}
                  useInitialHook={useInitial}
      >
        <App/>
      </DevSupport>
    </BrowserRouter>
  </React.StrictMode>,
)
