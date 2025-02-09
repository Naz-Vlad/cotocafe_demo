import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/app/app';
import {ThemeProvider} from 'styled-components';//подключаем фун-ию изstyled-components
import {defaultTheme} from './thems/default'; // подключили тему со стилями

// с помощью ThemeProvider обернём App в созданную тему:

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={defaultTheme}>
		  <App />
		</ThemeProvider>

  </StrictMode>,
)
