import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemsListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes,Route,Link } from 'react-router-dom';
import { CartContextProvider } from './components/context/CartContext'; 
import Cart from './components/Cart/Cart';
import Formulario from './components/Formulario/Formulario';
import Footer from './components/Footer/Footer';


const App =()=> {

  return (
    <div className="App">

    <CartContextProvider>
        <BrowserRouter>
     <NavBar/>
     <Routes>
       <Route path='./images/logo.png' element={<ItemListContainer/>}/>
       <Route path='/' element={<ItemListContainer/>}/>
       <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
       <Route path='/Detail/:productId' element={<ItemDetailContainer/>}/>
       <Route path='/cart' element={<Cart />} />
       <Route path='/Formulario' element={<Formulario/>} />
     </Routes>
     <Footer/>
</BrowserRouter> 

</CartContextProvider>

<div className="contenedor">
		</div>
 </div>
     


  )}
export default App