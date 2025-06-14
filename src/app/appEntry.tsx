import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from './providers/ThemeProvider'
import { Router } from './router/Router'
import { StoreProvider } from './providers/StoreProvider'
import '../shared/assets/styles/index.css'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ThemeProvider>
			<StoreProvider>
				<Router />
			</StoreProvider>
		</ThemeProvider>
	</StrictMode>
)
