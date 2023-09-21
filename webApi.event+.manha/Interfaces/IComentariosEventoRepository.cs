using webApi.event_.manha.Domains;

namespace webApi.event_.manha.Interfaces
{
    public interface IComentariosEventoRepository
    {
        void Cadastrar(ComentariosEvento comentario);
        void Delete(Guid id);
        List<ComentariosEvento> Listar();
        ComentariosEvento BuscarPorId(Guid id);
    }
}
