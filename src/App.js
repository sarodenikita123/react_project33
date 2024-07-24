import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './Componant/Pages/Add';
import Show from './Componant/Pages/Show';
import Update from './Componant/Pages/Update';
import Delete from './Componant/Pages/Delete';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Componant/Layout/Navbar';
function App() {
  return (
   <>
   <BrowserRouter>
   <Navbar/>
    <Routes>
      <Route path='/add' element={<Add/>}></Route>
      <Route path='/show' element={<Show/>}></Route>
      <Route path='/update/:userId' element={<Update/>}></Route>
      <Route path='/delete/:userId' element={<Delete/>}></Route>
    </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
