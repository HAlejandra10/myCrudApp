import './App.css';
import Listar from './componentes/listar';
import {Route, BrowserRouter as Router} from 'react';

function App() {
  return (
    <Router>
    <div className="container">
        Hola mundo!
        <Route exact path="/" component={Listar}> </Route>
        <Listar></Listar>
    </div>
    </Router>
  );
}

export default App;
