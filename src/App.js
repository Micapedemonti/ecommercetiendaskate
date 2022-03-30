import './App.css';
import NavBar from './components/components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemsListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="Caja-logo">
        <img src={'./images/logo.png'} className="App-logo" alt="logo" />
        </div>
    <NavBar/>
     <h1> UFO SKATESHOP</h1>
     <ItemListContainer greeting='Productos'/>
      </header>
    </div>
  );
}

export default App;