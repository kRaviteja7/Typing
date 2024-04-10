import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './pages/Landing/Landing';
import Home from './pages/Home/home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact strict path='/' element={<Landing/>}/>
        <Route path='/typing' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
