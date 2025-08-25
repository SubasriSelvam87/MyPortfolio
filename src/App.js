import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from './Components/Home/Svg';
import 'primereact/resources/themes/saga-blue/theme.css';  // or another theme
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import Contact from './Components/Contact/Contact';
import Nav from './Components/Navbar/Nav';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      {/* <Logo /> */}
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/logo" element={<Logo />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Nav" element={<Nav />} />

        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
