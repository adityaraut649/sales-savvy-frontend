import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from '../../my-app/src/routes/Routes';
import '../../my-app/src/styles/style.css';

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;