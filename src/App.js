import './Css/App.css';
import Home from './Componentes/Home';
import DataProvider from './Context/DataProvider';

function App() {
  return (
    <DataProvider>
     <Home/>
    </DataProvider>
  );
}

export default App;
