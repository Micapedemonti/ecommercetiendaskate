import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemsListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Tablas from './components/Tablas/Tablas';
import ItemCount from './components/ItemCount/ItemCount';
import { BrowserRouter, Routes,Route,Link } from 'react-router-dom';
import { useState } from 'react';
import Home from './components/Home/Home,'
const App =()=> {

  const handleOnAdd =(quantity)=> {
    console.log ('se agregaron ${quantity} productos')
  };
  const [show, setShow]=useState('detail')
  return (
    <div className="App">
      <header className="App-header">
      <div className="Caja-logo">
        <img src={'./images/logo.png'} className="App-logo" alt="logo" />
        </div>
        <BrowserRouter>
     <NavBar/>
     <Routes>
       <Route path='/Ofertas' element={<Home/>}/>
       <Route path='/' element={<ItemListContainer/>}/>
       <Route path='/Detail/:productId' element={<ItemDetailContainer/>}/>
       <Route path='/tablas' element={<Tablas/>}/>
       {/* <Route path='/accesorios' element={<ItemDetailContainer/>}/> */}
     </Routes>
</BrowserRouter>
       
         
     {/* <Counter initial= {0} stock ={10} onAdd={handleOnAdd}/>  */}

      </header>
      
    </div>
  )
}

export default App;