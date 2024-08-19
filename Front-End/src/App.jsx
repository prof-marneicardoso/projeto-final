
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from './routes/AppRoutes';
// import Navigation from './routes/Navigation';
// import Header from './components/Header/Header';
import './App.css';

function App() {
  return (
    <Router>
      <>
        <AppRoutes />
      </>
    </Router>
  );
}

export default App;
