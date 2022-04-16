import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemsListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Tablas from './components/Tablas/Tablas';
import ItemCount from './components/ItemCount/ItemCount';
import { BrowserRouter, Routes,Route,Link } from 'react-router-dom';
import { useState } from 'react';
import Home from './components/Home/Home,';
const App =()=> {

  // const handleOnAdd =(quantity)=> {
  //   console.log ('se agregaron ${quantity} productos')
  // };
  // const [show, setShow]=useState('detail')
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <div className="Caja-logo">
        <img src={'./images/logo.png'} className="App-logo" alt="logo" />
        <h1>UFO SKATESHOP</h1>
        </div>
      {/* </header> */}
      
        <BrowserRouter>
     <NavBar/>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/Detail/:productId' element={<ItemDetailContainer/>}/>
       <Route path='/tablas' element={<Tablas/>}/>
       <Route path='/ofertas' element={<ItemListContainer/>}/>
       {/* <Route path='/accesorios' element={<ItemDetailContainer/>}/> */}
     </Routes>
</BrowserRouter>
           </div>
  )
     {/* <Counter initial= {0} stock ={10} onAdd={handleOnAdd}/>  */}
     {/* <ItemCount initial= {0} stock ={10} onAdd={handleOnAdd}/>  */}
  }

export default App;