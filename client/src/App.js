import { BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import { useState } from 'react';

//Pages
import Homepage from './pages/homepage/Homepage';
import Productpage from './pages/productpage/Productpage';
import ServicePage from './pages/servicepage/ServicePage';
import Cartpage from './pages/cartpage/Cartpage';

//componenets
import Navbar from './components/navbar/Navbar';
import Backdrop from './components/backdrop/Backdrop';
import Sidebar from './components/sidebar/Sidebar';
import './App.css';

function App() {
  const [sideToggle, setSideToggle] = useState(false);
  return (
    <Router>
    <div className="App">
      <Navbar click = {()=>{setSideToggle(true)}}/>
      <Sidebar show = {sideToggle} click = {()=>{setSideToggle(false)}}/> 
      <Backdrop show = {sideToggle} click = {()=>{setSideToggle(false)}}/>
      <main>
        <Routes>
          <Route exact path = '/' element = {<Homepage/>}/>
          <Route exact path = '/product/:id' element = {<Productpage/>}/>
          <Route exact path = '/service/:id' element = {<ServicePage/>}/>
          <Route exact path = '/cart' element = {<Cartpage/>}/>
        </Routes>
      </main>
      {/*HomeScreen*/}
      {/*ProductScreen*/}
      {/*CartScreen*/}
    </div>
    </Router>
  );
}

export default App;
