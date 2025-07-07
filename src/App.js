
import './App.css';
import Footer from './layout/footer';
import Header from './layout/Header';
import Home from './page/Home'
import Breeds from './page/Breeds'


import FunFact from './page/FunFact'
import { Route, Routes   } from "react-router";
function App() {
  return (
    <>
    <Header/>
   
      <Routes>

      <Route index element={<Home/>}></Route>
      <Route path='breeds' element={<Breeds/>}></Route>
   
      <Route path='fun' element={<FunFact/>}></Route>
      </Routes>
  
    <Footer/>
    </>
  )
}

export default App;
