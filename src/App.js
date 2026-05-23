import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from "./landing/LandingPage"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import Upgrade from "./pages/Upgrade"
import HelpCenter from "./pages/HelpCenter"

// Legal Pages
import PrivacyPolicy from "./landing/legal/Privacy"
import TermsOfService from "./landing/legal/Terms"
import RefundPolicy from "./landing/legal/Refund"
import CookiePolicy from "./landing/legal/Cookies"

import ProtectedRoute from "./components/ProtectedRoute"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        {/* Protected Routes */}
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/upgrade" 
          element={
            <ProtectedRoute>
              <Upgrade />
            </ProtectedRoute>
          } 
        />
        
        <Route path="/help-center" element={<HelpCenter />} />
        
        {/* Legal Routes */}
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/tos" element={<TermsOfService />} />
        <Route path="/refund" element={<RefundPolicy />} />
        <Route path="/cookies" element={<CookiePolicy />} />
      </Routes>
    </Router>
  )
}

export default App
