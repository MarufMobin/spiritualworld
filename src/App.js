import './App.css';
import Home from './Pages/Home/Home';
import Background from './Pages/Shared/Background/Background';
import MainManu from './Pages/Shared/MainManu/MainManu';

function App() {
  return (
    <div className="App">
      <MainManu></MainManu>
      <Background></Background>
      <Home></Home>
    </div>
  );
}

export default App;
