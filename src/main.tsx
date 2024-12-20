import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter, Route, Routes } from 'react-router';
import SofaDetailsPage from './pages/SofaDetailsPage.tsx';
import Home from './pages/Home.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/sofa/:id" element={<SofaDetailsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
