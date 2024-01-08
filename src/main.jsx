import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Router'
import { HelmetProvider } from 'react-helmet-async'
import AuthProvider from './Providers/AuthProvider'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={queryClient}>
        <React.StrictMode>
          <HelmetProvider>
            <AuthProvider>
              <RouterProvider router={router}></RouterProvider>
            </AuthProvider>
          </HelmetProvider>
        </React.StrictMode>
    </QueryClientProvider>
)
