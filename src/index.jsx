import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'

import { ChakraProvider, extendTheme } from '@chakra-ui/react'

//Font Imports
import '@fontsource/poppins/600.css'
import '@fontsource/roboto'

const theme = extendTheme({
  fonts: {
    heading: 'Poppins, sans-serif',
    body: 'Roboto, sans-serif'
  },
  colors: {
    blueCTE: {
      50: '#1C62BA',
      100: '#4332FA',
      500: '#2E23AE',
      900: '#110A61',
    },
    blueGrad: 'linear-gradient(90deg, rgba(55,48,186,1) 0%, rgba(23,165,194,1) 100%)',
    /* darkBlueCTE: '#110A61',
    blueCTEa: '#2E23AE',
    lightBlueCTE: '#1C62BA', */
    orangeCTE: '#FABC4B',
    neonCTE: '#D2FA19'
  },
  
  styles: {
    global: {
      body: {
        color: 'gray.800'
      }
    }
  }
})


ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider resetCSS='true' theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
