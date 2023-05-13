import './App.css';
import './comonents/Header/index'
import Header from './comonents/Header';
import Main from './comonents/Main';
import Footer from './comonents/Footer';
import Contact from './comonents/Contact';
import Nav from './comonents/Nav';
import { Route, Routes } from 'react-router-dom';
import Add from './comonents/Add/Add';
function App() {
  return (
    <>
      <Header/>
      {/* <Main/> */}
      {/* <Footer/> */}
      {/* <Contact/> */}
      {/* <Nav/> */}
      <Routes>
        <Route path='/' element={<Nav/>}></Route>
        <Route path='/add' element={<Add/>}></Route>
      </Routes>
    </>
  );
}

export default App;