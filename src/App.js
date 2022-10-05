// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/Itemlistcontainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Hero from './components/Hero/Hero';
import ItemDetaielContainer from './components/ItemDetaielContainer/ItemDetaielContainer';
// import ItemList from './components/ItemList/ItemList';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={ <ItemListContainer/>}/>
      <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
      <Route path='/detail/:productId' element={ <ItemDetaielContainer/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
