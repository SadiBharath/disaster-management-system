import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import { UserManagement } from './components/UserManagement';  // Create later
import { DisasterTracking } from './components/DisasterTracking'; // Create later

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Sidebar />
        <div style={{ marginLeft: '220px', padding: '20px' }}>
          <Routes>
            <Route exact path="/" component={Dashboard} />
            <Route path="/users" component={UserManagement} />
            <Route path="/disasters" component={DisasterTracking} />
          </Routes>
        </div>
      </div>
    </Router>

  );
}

export default App;

