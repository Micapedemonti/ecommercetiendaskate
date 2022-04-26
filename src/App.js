import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemsListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Tablas from './components/Tablas/Tablas';
import { BrowserRouter, Routes,Route,Link } from 'react-router-dom';
import { CartContextProvider } from './components/context/CartContext'; 
import Cart from './components/Cart/Cart';

const App =()=> {


  
  

  return (
    <div className="App">

    <CartContextProvider>
        <BrowserRouter>
     <NavBar/>
     <Routes>
       <Route path='./images/logo.png' element={<ItemListContainer/>}/>
       <Route path='/' element={<ItemListContainer/>}/>
       <Route path='/Detail/:productId' element={<ItemDetailContainer/>}/>
       <Route path='/tablas' element={<Tablas/>}/>
       <Route path='/cart' element={<Cart />} />
     </Routes>
</BrowserRouter> 

</CartContextProvider>


 </div>
     


  )}
export default App