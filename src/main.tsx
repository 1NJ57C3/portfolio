import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

import { AppProviders } from './shared/providers/AppProviders.tsx'
import App from './App.tsx'

import './index.css'
import "./shared/styles/global.css";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
    <Analytics />
    <SpeedInsights />
  </StrictMode>,
)
