import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';

function App() {
  return (
    <>
    <Navbar></Navbar>
   <News pageSize={5} country="in" category="science"></News>
    </>
  );
}

export default App;
