import './style.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useState} from 'react';

const Contato = ()=>{

    const enviarEmail = () =>{

        if(nome.leading == 0 || telefone.length == 0 || email.length == 0){
            notify("Preencha todos os campos!","warning");
        }else{
            setNome("");
            setTelefone("");
            setEmail("");
            notify("Enviado, Aguarde nosso contato!","success");
        }
    }

    const [nome, setNome] = useState('')
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const notify = (msg, type) => toast(msg, {type:type});

    return (
        <main className="container-contato">
            <ToastContainer/>
            <div className="subcontainer-contato">
                <input value={nome} placeholder="Nome" onChange={(txt)=> setNome(txt.target.value)}/>
                <input value={telefone} placeholder="Telefone" onChange={(txt) => setTelefone(txt.target.value)}/>
                <input value={email} placeholder="E-mail" onChange={(txt) => setEmail(txt.target.value)}/>
                <div className="container-buttons">
                    <button onClick={enviarEmail}>Enviar</button>
                </div>
                <div className="container-fone">
                    <p>Ou entre Contato pelos Telefones.</p>
                    <p>+55(99) 9999-9999</p>
                    <p>+55(88) 8888-8888</p>
                </div>
            </div>
        </main>
    );
}

export default Contato;