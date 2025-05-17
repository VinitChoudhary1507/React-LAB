import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Dataprovider } from './Contexts/Context';
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Dataprovider>
      <App />
    </Dataprovider>
  </StrictMode>,
)
