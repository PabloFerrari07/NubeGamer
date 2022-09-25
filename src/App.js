// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/Itemlistcontainer';
import Countitem from './components/CountItem/CountItem';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <ItemListContainer saludo={'BIENVENIDO A TU WEB GAMER'}/>

      {/* <Countitem/> */}
    </div>
  );
}

export default App;
