import './App.css';
import Header from '../src/components/Header/Header';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './views/Home/Home';
import MainLayout from './layouts/main/MainLayout';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      {/* <MainLayout/> */}
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
           <Route index element={<Home/>}/>
           <Route path='products/:productId' element={<Header/>}/>
        </Route>
        <Route path='electronic-devices' element={<Footer/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
