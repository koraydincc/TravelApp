// App.js

import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import HomePage from './Pages/HomePage';
import CreateTravel from './Pages/CreateTravel';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/SeyahatPlanıOlustur' element={<CreateTravel/>}/>
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
