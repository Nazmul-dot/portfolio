import './App.css';
import Navbar from './components/nab/Navbar'
import AllPage from './components/allpage/AllPage'
import { Switch, Route } from 'react-router-dom'
function App() {
  return (
    <>
      <Navbar />
      <AllPage />
    </>
  );
}

export default App;
