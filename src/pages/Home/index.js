import { useEffect, useState } from "react";
import api from '../../services/Api';
import {Link} from 'react-router-dom';
import './home.css';

// https://api.themoviedb.org/3/movie/now_playing?api_key=d11518fe4a3ae9e63fdca0c10ffe7186&language=pt-BR&page=1

function Home(){
    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function loadFilmes(){
            const response = await api.get("movie/now_playing?",{
                params:{
                    api_key:"d11518fe4a3ae9e63fdca0c10ffe7186",
                    language:"pt-BR",
                    page:1,
                }
            })
            // console.log(response.data.results.slice(0,10));
            setFilmes(response.data.results.slice(0,10));
            setLoading(false);
        }
        loadFilmes();
    },[])
    if(loading){
        return(
            <div className="loading">
                <h1>carregando filme...</h1>
            </div>
        )
    }
    return(
        <div className="container">
            <div className="lista-filmes">
                {filmes.map((filme)=>{
                    return(
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}/>
                            <Link to={`/filme/${filme.id}`}>Ver detalhes</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}
export default Home;