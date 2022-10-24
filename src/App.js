import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/Itemlistcontainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { CartContextProvider } from './context/CartContext';
import ItemDetaielContainer from './components/ItemDetaielContainer/ItemDetaielContainer';




function App() {

  // console.log(Mostrar)
  return (
    <div className="App">
    <CartContextProvider>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={ <ItemListContainer/>}/>
      <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
      <Route path='/detail/:productId' element={ <ItemDetaielContainer/>}/>
      <Route path='*' element={<h1>404 Not found</h1>}/>
      </Routes>
      </BrowserRouter>
    </CartContextProvider>

  
    </div>
  );
}

export default App;
