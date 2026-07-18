import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import { useScrollReveal } from './hooks/useScrollReveal';

function App() {
  // Initialize scroll reveal animations
  useScrollReveal({ threshold: 0.15 });

  return (
    <div className="bg-surface-container-lowest text-on-surface font-body-md antialiased selection:bg-primary selection:text-on-primary">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
