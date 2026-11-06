import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App.jsx'
import { Buffer } from 'buffer';

window.Buffer = Buffer;
globalThis.Buffer = Buffer;

createRoot(document.getElementById('root')).render(<App />);
