import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemsListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Tablas from './components/Tablas/Tablas';
import ItemCount from './components/ItemCount/ItemCount';
import { BrowserRouter, Routes,Route,Link } from 'react-router-dom';
import { useState, createContext } from 'react';
import Home from './components/Home/Home,'


export const Context= createContext()


const App =()=> {

  const [cart,setCart]=useState([])
  console.log(cart)

  
  

  return (
    <div className="App">
      <Context.Provider value={{cart,setCart}}>
      {/* <header className="App-header">  */}
        <BrowserRouter>
     <NavBar/>
     <Routes>
     {/* <Route path='/' element={<Home/>}/>
     <Route path='/Ofertas' element={<ItemListContainer/>}/> */}
       {/* <Route path='/Tablas' element={<ItemListContainer/>}/> */}
       <Route path='./images/logo.png' element={<ItemListContainer/>}/>
       <Route path='/' element={<ItemListContainer/>}/>
       <Route path='/Detail/:productId' element={<ItemDetailContainer setCart={setCart}cart={cart}/>}/>
       <Route path='/tablas' element={<Tablas/>}/>
       {/* <Route path='/accesorios' element={<ItemDetailContainer/>}/> */}
     </Routes>
</BrowserRouter>
{/* </header>      
     </div> */}

</Context.Provider>

 </div>
     


  )}
export default App;