import './App.css';
import Function from './components/Function';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div className = "App" >
    <Navbar></Navbar>
    <ItemListContainer greeting={"Bienvenido a SERECH"}></ItemListContainer>
    
    <Function name="-Educación a distancia"/>
    </div>
  );
}

export default App;
