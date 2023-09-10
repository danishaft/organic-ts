import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ContextProvider } from './contexts/context.tsx'
import { ProductProvider } from './contexts/productContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ContextProvider>
      <ProductProvider>
        <App />
      </ProductProvider>
    </ContextProvider>
  </React.StrictMode>,
)
