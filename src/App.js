import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import HomePage from './Pages/HomePage';
import CreateTravel from './Pages/CreateTravel';
import TravelPlanDetail from './Pages/TravelPlanDetail';
import PlaceDetail from './Pages/PlaceDetail';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path='/SeyahatPlaniOlustur' element={<CreateTravel/>}/>
          <Route path='/SeyahatPlanimDetay' element={<TravelPlanDetail/>}/>
          <Route exact path='/SeyahatPlanimDetay/:travelName' element={<TravelPlanDetail/>}/>
          <Route exact path='/SeyahatPlanimDetay/:travelName/:fsqID' element={<PlaceDetail/>}/>
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;