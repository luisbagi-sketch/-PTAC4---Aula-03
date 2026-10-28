import { createRoot } from 'react-dom/client'

// Para ver cada exercício, troque o número no import abaixo (1 a 5).
import App from './exercicios/Exercicio2.jsx'

// Obs.: não uso <StrictMode> aqui de propósito. Em desenvolvimento o
// strictmode roda o useEffect duas vezes, e aí o network mostraria
// duas requisições (o Exercício 5 pede conferir que dispara só uma).
createRoot(document.getElementById('root')).render(<App />)
