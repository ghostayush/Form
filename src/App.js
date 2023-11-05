import './App.css';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom"; 
import Form from './components/Form/Form';
import Signup from './components/User/Register'
import Login from './components/User/Login';

function App() {
  return(
       
          <Routes>
            <Route exact path="/" Component={Signup}/>
            <Route exact path="/form" Component={Form}/>
            <Route exact path='/login' Component={Login}/>
          </Routes>
      
  );
}

export default App;