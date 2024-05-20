import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NewEnrollment from './components/NewEnrollment';
import Patients from './components/Patients';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/new-enrollment' element={<NewEnrollment />} />
        <Route path='/patients' element={<Patients/>}/>
      </Routes>
    </Router>
  );
}

export default App;
