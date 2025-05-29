import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Components/pages/Dashboard";
import Documents from "./Components/pages/Documents";
import Projects from "./Components/pages/Projects";
import Schedule from "./Components/pages/Schedule";
import Students from "./Components/pages/Students";
import Login from "./Components/Auth/Login";
import Signup from "./Components/Auth/Signup";
import { AuthProvider } from "./Components/Auth/AuthContext"; // ✅ fixed
import ProtectedRoute from "./Components/Auth/ProtectedRoute";

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        <Route path="/" element={
            <Dashboard />
        } />
        
        <Route path="/Documents" element={
          <ProtectedRoute>
            <Documents />
          </ProtectedRoute>
        } />
        
        <Route path="/projects" element={
          <ProtectedRoute>
            <Projects />
          </ProtectedRoute>
        } />
        
        <Route path="/schedule" element={
          <ProtectedRoute>
            <Schedule />
          </ProtectedRoute>
        } />
        
        <Route path="/students" element={
          <ProtectedRoute>
            <Students />
          </ProtectedRoute>
        } />
      </Routes>
    </AuthProvider>
  );
};

export default App;
