using webApi.event_.manha.Domains;

namespace webApi.event_.manha.Interfaces
{
    public interface IEventoRepository
    {
        void Cadastrar(Evento evento);
        void Delete(Guid id);
        List<Evento> Listar();
        Evento BuscarPorId(Guid id);
        void Atualizar(Guid id, Evento evento);
    }
}
