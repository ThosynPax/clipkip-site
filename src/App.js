// src/App.js
import React from 'react';
import { Button } from '@mui/material';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Notice the change to Routes
import PrivacyPolicy from './privacy';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>ClipKip Chrome Extension Page</h1>
        <Button variant="contained" color="primary">
         Coming Soon
        </Button>

        <nav>
          <ul>
            <li>
              <Link to="/privacy">Privacy Policy</Link>
            </li>
          </ul>
        </nav>

        <Routes> {/* Replace Switch with Routes */}
          <Route path="/privacy" element={<PrivacyPolicy />} />
          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
