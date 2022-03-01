import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'

import { ChakraProvider, extendTheme } from '@chakra-ui/react'

//Font Imports
import '@fontsource/poppins/700.css'
import '@fontsource/roboto'

const theme = extendTheme({
  fonts: {
    heading: 'Poppins',
    body: 'Roboto'
  },
  colors: {
    blueGrad: 'linear-gradient(90deg, rgba(55,48,186,1) 0%, rgba(23,165,194,1) 100%)',
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
