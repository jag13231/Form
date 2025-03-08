import './App.css';
import { Routes,Route } from 'react-router-dom';
import Form from './Components/Form';
import Home from './Components/Home';

function App() {
  return (
   <>
   <Routes>
    <Route path='/' element={<Form />} />
    <Route path='/home' element={<Home />} />
   </Routes>
  
   </>
  );
}

export default App;
