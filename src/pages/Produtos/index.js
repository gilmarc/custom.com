import './style.css'
import Produto from '../../components/Produto';
import Manopla from '../../img/Manopla.png';
import Retrovisor from '../../img/Retrovisor.png';
import Comando from '../../img/Comando.png';
import Suporte from '../../img/Suporte.png';
import Colete from '../../img/Colete.png';
import Sissibar from '../../img/Sissibar.png';

const Produtos = ()=>{
    return (
        <main className="container-produtos">
            <Produto name="Sissibar" img={Sissibar}/>
            <Produto name="Manoplas" img={Manopla}/>
            <Produto name="Comando Avançado" img={Comando}/>
            <Produto name="Suporte retrovisores invertidos" img={Suporte}/>
            <Produto name="Retrovisores" img={Retrovisor}/>
            <Produto name="Coletes" img={Colete}/>
        </main>
    );
}

export default Produtos;
