import axios from "axios";

// base URL:https://api.themoviedb.org/3/

// URL da api https://api.themoviedb.org/3/movie/now_playing?api_key=d11518fe4a3ae9e63fdca0c10ffe7186&language=pt-BR&page=1

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});
export default api;