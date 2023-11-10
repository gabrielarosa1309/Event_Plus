import axios from "axios";

/**
 * Rota para o recurso Evento
 */
export const eventsResource = '/Evento';
/**
 * Rota para o recurso Listar Próximos Eventos
 */
export const nextEventResource = '/Evento/ListarProximos';
/**
 * Rota para o recurso Tipos de Eventos
 */
export const eventsTypeResource = `/TiposEvento`

const apiPort = '7118';
const localApiUri = `https://localhost:${apiPort}/api`;
const externalApiUri = null;

const api = axios.create({
    baseURL: localApiUri
});

export default api;