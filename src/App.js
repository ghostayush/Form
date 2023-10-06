import './App.css';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom"; 
import Form from './components/Form/Form';

function App() {
  return(
    <Router>
      <Routes>
        <Route exact path="/" Component={Form}/>
      </Routes>
    </Router>
  );
}

export default App;