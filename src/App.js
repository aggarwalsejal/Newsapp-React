import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  return (
    <div>
      <Router>
    <Navbar></Navbar>
    <Routes>
    <Route exact path="/" element={  <News key="general" pageSize={5} country="in" category="general" />}>
    </Route>
    </Routes>
    <Routes>
    <Route exact path="/business" element={  <News key="business" pageSize={5} country="in" category="business" />}>
    </Route>
    </Routes>
    <Routes>
    <Route exact path="/entertainment" element={  <News key="entertainment" pageSize={5} country="in" category="entertainment" />}>
    </Route>
    </Routes>
    <Routes>
    <Route exact path="/general" element={  <News key="general" pageSize={5} country="in" category="general" />}>
    </Route>
    </Routes>
    <Routes>
    <Route exact path="/sports" element={  <News key="sports" pageSize={5} country="in" category="sports" />}>
    </Route>
    </Routes>
    <Routes>
    <Route exact path="/health" element={  <News key="health" pageSize={5} country="in" category="health" />}>
    </Route>
    </Routes>
    <Routes>
    <Route exact path="/science" element={  <News key="science" pageSize={5} country="in" category="science" />}>
    </Route>
    </Routes>
    <Routes>
    <Route exact path="/technology" element={  <News key="technology" pageSize={5} country="in" category="technology" />}>
    </Route>
    </Routes>
   </Router>
    </div>
  );
}

export default App;
