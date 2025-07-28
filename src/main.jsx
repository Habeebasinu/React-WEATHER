import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './index.css'
import App from './App.jsx'
import {WeatherFunction}from '../src/Context2/Weathercontext2'

createRoot(document.getElementById('root')).render(
  
    
      <StrictMode>
        <BrowserRouter>
        <WeatherFunction>
          <App />
        </WeatherFunction>
        </BrowserRouter>
        
      </StrictMode>
    
    
  
)
