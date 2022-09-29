import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Questions from './Components/Questions/Questions';

function App() {
  return (
    <div className='overflow-hidden'>
      <Navbar></Navbar>
      <Home></Home>
      <Questions></Questions>
    </div>
  );
}

export default App;
