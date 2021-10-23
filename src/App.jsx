import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from './components/AppRouter';
import './App.css'

function App() {
  return (
    
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
    
  );
}

export default App;
