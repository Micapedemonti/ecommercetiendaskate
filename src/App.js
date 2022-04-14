import './App.css';
import Counter from './components/ItemCount/ItemCount';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemsListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemCount from './components/ItemCount/ItemCount';
import { BrowserRouter, Router, Switch,Route } from 'react-router-dom';
const App =()=> {

  const handleOnAdd =(quantity)=> {
    console.log ('se agregaron ${quantity} productos')
  };
  return (
    <div className="App">
      <header className="App-header">
      <div className="Caja-logo">
        <img src={'./images/logo.png'} className="App-logo" alt="logo" />
        <div className='Menu'>
        <NavBar/>
        </div>
        </div>
     <ItemListContainer greeting='Ofertas'/>
     <Counter initial= {0} stock ={10} onAdd={handleOnAdd}/>
     <ItemDetailContainer/>
      </header>
    </div>
  );
}

export default App;