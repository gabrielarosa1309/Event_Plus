using webApi.event_.manha.Domains;

namespace webApi.event_.manha.Interfaces
{
    public interface ITiposEventoRepository
    {
        void Cadastrar(TiposEvento tipoEvento);
        void Delete(Guid id);
        List<TiposEvento> Listar();
        TiposEvento BuscarPorId(Guid id);
        void Atualizar(Guid id, TiposEvento tipoEvento);
    }
}
