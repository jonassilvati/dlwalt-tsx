import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import './index.css';
import Contact from './pages/Contact';
import Bv from './pages/Integrations/Bv';

import Main from './pages/Main';
import Policy from './pages/Policy';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Terms from './pages/Terms';

import reportWebVitals from './utils/reportWebVitals';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/projetos" element={<Projects />} />
         {/*<Route path="/projetos/:id" element={<ProjectsSingle content={} />} /> */}
        <Route path="/servicos" element={<Services />} />
        {/*<Route path="/servicos/:id" element={<ServicesSingle content={} />} /> */}
        <Route path="/politica" element={<Policy />} />
        <Route path="/termos" element={<Terms />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/integracoes/banco-bv" element={<Bv />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
