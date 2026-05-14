import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router/dom";
import { router } from './routes/Routes';
import BookProvider from './context/BookContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';






createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </BookProvider>
    
  </StrictMode>,
)
