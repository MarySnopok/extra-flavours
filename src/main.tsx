// import React from "react";
// import {createRoot} from "react-dom/client";
// import App from "./App";

// const container = document.getElementById("root");
// const root = createRoot(container!);
// root.render(<App />);


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)