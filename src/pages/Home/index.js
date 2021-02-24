import imgHome from "../../img/home.jpg";
import './style.css'
import {Link} from 'react-router-dom';

const Home = ()=>{
    return (
        <main >
            <div className="container-home">
                <img src={imgHome} alt="Aventura"/>
                <div>
                    <h1>Estilize sua Custon</h1>
                    <p>Fazemos peças e acessórios sobre encomenda, para todos os estilos de custom! Veja nosso portifólio para sua aventura.</p>
                    <Link to="/produtos">
                        <button><a>Produtos</a></button>
                    </Link>
                </div>
            </div>
            <div className="container-home">
                <iframe width="50%" height="400" src="https://www.youtube.com/embed/s5zBDaovyM0" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
                <div className="div-video">
                    <h1>Viva sua aventura</h1>
                    <p>Fazemos peças e acessórios sobre encomenda, para todos os estilos de custom! Veja nosso portifólio para sua aventura.</p>
                    <Link to="/produtos">
                        <button><a>Produtos</a></button>
                    </Link>
                </div>
            </div>
        </main>
    );
}

export default Home;