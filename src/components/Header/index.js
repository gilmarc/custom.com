import {Link} from 'react-router-dom';
import './style.css';
import logo from '../../img/logo.jpg';

const Header = ()=>{
    return (
        <main className="container-main">
            <Link to="/">
                <div>
                    <img src={logo} alt="Live to Ride"/>
                    <a>Custom.com</a>
                </div>
            </Link>
            <ul>
                <li><Link to="/"><a>Home</a></Link></li>
                <li><Link to="/produtos"><a>Produtos</a></Link></li>
                <li><Link to="/contato"><a>Contato</a></Link></li>
            </ul>
        </main>
    );
}

export default Header;