import './style.css'
import {Link} from "react-router-dom";


const Produto = ({name = 'Produto', img})=>{
    console.log(img);
    return (
        <div className="container-produto">
            <img src={img} alt="Live to Ride"/>
            <p>{name}</p>
            <Link to="/contato">
                <button>Contato</button>
            </Link>
        </div>
    );
}

export default Produto;