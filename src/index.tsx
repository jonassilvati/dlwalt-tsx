import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import './index.css';

import Main from './pages/Main';
import Projects from './pages/Projects';
import ProjectsSingle from './pages/Projects/single';
import Services from './pages/Services';
import Policy from './pages/Policy';
import Terms from './pages/Terms';
import Vacancies from './pages/Vacancies';
import Bv from './pages/Integrations/Bv';
import Contact from './pages/Contact';

import NotFound from './pages/404';

import reportWebVitals from './utils/reportWebVitals';
import VacanciesSingle from './pages/Vacancies/single';
import Search from './pages/Search';
import Faq from './pages/Faq';
import Sells from './pages/Landings/Sells';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/projetos" element={<Projects />} />
         <Route path="/projetos/:id" element={<ProjectsSingle />} />
        <Route path="/servicos" element={<Services />} />
        {/*<Route path="/servicos/:id" element={<ServicesSingle content={} />} /> */}
        <Route path="/vagas" element={<Vacancies />} />
        <Route path="/vagas/:id" element={<VacanciesSingle />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/politica" element={<Policy />} />
        <Route path="/termos" element={<Terms />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/integracoes/banco-bv" element={<Bv />} />
        <Route path="/pesquisa" element={<Search />} />
        <Route path="/venda" element={<Sells />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
