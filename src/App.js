import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from "./landing/LandingPage"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import HelpCenter from "./pages/HelpCenter"
import TermsOfService from "./pages/TermsOfService"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/help-center" element={<HelpCenter />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
    </Router>
  )
}

export default App
