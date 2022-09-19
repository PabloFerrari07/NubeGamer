// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/Itemlistcontainer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <ItemListContainer saludo={'holi'}/>
    </div>
  );
}

export default App;
