import './App.css';
import { Routes,Route } from 'react-router-dom';
import Form from './Components/Form';
import Home from './Components/Home';
import Regfrm from './Components/Regfrm';

function App() {
  return (
   <>
   <Routes>
    <Route path='/' element={<Form />} />
    <Route path='/home' element={<Home />} />
    <Route path='/reg' element={<Regfrm />} />
   </Routes>
  
   </>
  );
}

export default App;
