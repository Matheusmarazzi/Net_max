import { Link } from "react-router-dom";
import './erro.css';

function Erro(){
    return(
        <div className="not-found">
            <h1>Erro 404</h1>
            <h2>pagina não encontrada</h2>
            <Link to="/">Voltar para a pagina inicial</Link>

        </div>
    )
}
export default Erro;