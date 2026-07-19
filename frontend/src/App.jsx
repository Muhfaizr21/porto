import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import ToastContainer from './components/Toast';
import { useScrollReveal } from './hooks/useScrollReveal';
import { useEffect, useRef } from 'react';

function AnimatedRoutes() {
  const location = useLocation();
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.classList.remove('page-enter');
    el.classList.add('page-exit');
    requestAnimationFrame(() => {
      el.classList.remove('page-exit');
      el.classList.add('page-enter');
    });
  }, [location.pathname]);

  return (
    <div ref={containerRef} className="transition-all duration-300 ease-out">
      <Routes location={location}>
        <Route path="/" element={<Landing />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
      </Routes>
    </div>
  );
}

function App() {
  useScrollReveal({ threshold: 0.15 });

  return (
    <div className="bg-surface-container-lowest text-on-surface font-body-md antialiased selection:bg-primary selection:text-on-primary">
      <Router>
        <AnimatedRoutes />
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
