import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/index.css'
import { Router } from './routes/Router'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Router />
	</StrictMode>
)
