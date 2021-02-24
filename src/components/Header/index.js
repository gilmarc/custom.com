import {Link} from 'react-router-dom';
import './style.css';
import logo from '../../img/logo.jpg';

const Header = ()=>{
    return (
        <main className="container-main">
            <Link to="/">
                <div>
                    <img src={logo} alt="Live to Ride"/>
                    <p>Custom.com</p>
                </div>
            </Link>
            <ul>
                <li><Link to="/"><p>Home</p></Link></li>
                <li><Link to="/produtos"><p>Produtos</p></Link></li>
                <li><Link to="/contato"><p>Contato</p></Link></li>
            </ul>
        </main>
    );
}

export default Header;