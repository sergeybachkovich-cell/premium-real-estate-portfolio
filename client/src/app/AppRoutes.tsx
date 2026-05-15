import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import App from '../App'; // 

const SouvenirsPage = lazy(() => import ('../pages/SouvenirsPage').then((m) => ({default: m.SouvenirsPage})));
const CustomPage = lazy(() => import ('../pages/CustomPage').then((m)=> ({default: m.CustomPage}))
);

const PrintingPage = lazy(() => import ('../pages/PrintingPage').then((m)=> ({default: m.PrintingPage})));


const PageFallback = () => (
  <div style={{ display: 'grid', placeItems: 'center', minHeight: '60vh' }}>
    <span>Загрузка раздела...</span>
  </div>
);

export const AppRoutes = () => {
  return (
    <Suspense fallback={<PageFallback />}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path='/souvenirs' element={<SouvenirsPage />} />
        <Route path='/custom' element={<CustomPage/>} />
        <Route path='/printing' element={<PrintingPage />} />
        <Route path='*' element={<div>404</div>} />
      </Routes>
    </Suspense>
  );
}