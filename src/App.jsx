import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from './components/AppRouter';
import './App.css'
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    
      <BrowserRouter>
        <Navbar/>
        <AppRouter/>
      </BrowserRouter>
    
  );
}

export default App;
