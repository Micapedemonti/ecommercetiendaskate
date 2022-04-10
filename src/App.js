import './App.css';
import Counter from './components/components/ItemCount/ItemCount';
import NavBar from './components/components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemsListContainer';
import ItemCount from './components/components/ItemCount/ItemCount';
import ItemDetailContainer from './components/components/ItemDetailContainer/ItemDetailContainer';

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