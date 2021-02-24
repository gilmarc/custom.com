import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Produtos from './pages/Produtos';
import Contato from './pages/Contato'
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/produtos" exact={true} component={Produtos} />
            <Route path="/contato" exact={true} component={Contato} />
        </Switch>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
