import { useEffect, useState } from "react";
import {  useParams, useNavigate } from "react-router-dom";
import api from '../../services/Api';
import './filme-info.css';
import {toast} from 'react-toastify'



function Filme(){
    const {id} = useParams();
    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(()=>{
        async function loadFilme(){
            await api.get(`/movie/${id}`,{
                params:{
                    api_key:"d11518fe4a3ae9e63fdca0c10ffe7186",
                    language:"pt-BR",
                }
            })
            .then((response)=>{
                setFilme(response.data);
                setLoading(false);
            })
            .catch(()=>{
                navigate("/", {replace: true});
                return;
            })
        }
        loadFilme();

        return() =>{
            console.log("desmontado");
        }
    },[navigate, id])

    function salvarFilme(){
        const minhasLista = localStorage.getItem("@netmax");
        let filmesSalvos = JSON.parse(minhasLista) || [];

        const hasFilme = filmesSalvos.some((filmesSalvos)=>filmesSalvos.id === filme.id);

        if(hasFilme){
           toast.warning("Esse filme ja está na lista")
            return;
        }
        filmesSalvos.push(filme);
        localStorage.setItem("@netmax", JSON.stringify(filmesSalvos));
        toast.success("Filme salvo com sucesso");

    }


    if(loading){
        return(
            <div className="filme-info">
                <h1>carregando detalhes...</h1>
            </div>
        )
    }
    return(
        <div className="filme-info">
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title}/>
            <h3>Sinopse:</h3>
            <span>{filme.overview}</span>
            <strong>Avaliação: {filme.vote_average}</strong>


            <div className="area-buttons">
                <button onClick={salvarFilme}>Salvar</button>
                <button>
                    <a target='blank' rel="external" href={`https://youtube.com/results?search_query=${filme.title} trailer`}>
                        trailer
                    </a>
                </button>
            </div>
        </div>
    )
}
export default Filme;