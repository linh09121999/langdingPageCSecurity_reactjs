import React, { Suspense, useEffect } from 'react';
import { HashRouter, Route, Routes, Navigate, Outlet, BrowserRouter } from 'react-router-dom';
import { Footer, Header } from './components';
import '../src/assets/css/index.css';
import { useGlobalContext } from "./context/contextGlobal";
import { BackToTop, ScrollProgress } from './view/action';

const Page404 = React.lazy(() => import('./view/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./view/pages/page500/Page500'));

const Home = React.lazy(() => import('./view/home/home'));

const ProtectedRoute = () => {
  // const { isMobile } = useGlobalContext();
  return (
    <div className="flex flex-col w-full body" >
      <svg width="0" height="0">
        <defs>
          <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--primary)" />
            <stop offset="100%" stopColor="var(--secondary)" />
          </linearGradient>
        </defs>
      </svg>
      {/* progress bar */}
      <ScrollProgress />

      {/* back to top */}
      <BackToTop />
      {/* <!-- Header --> */}
      <Header />
      <Outlet />
      <Footer />
    </div>

  );
};

function App() {

  return (
    <BrowserRouter >
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path="/404" name="Page 404" element={<Page404 />} />
          <Route exact path="/500" name="Page 500" element={<Page500 />} />
          <Route path="/" element={<ProtectedRoute />}>
            <Route index element={<Navigate to="/home" replace />} />
            <Route exact path="/home" name="Home" element={<Home />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter >
  )
}

export default App
