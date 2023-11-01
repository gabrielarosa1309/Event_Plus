using webApi.event_.manha.Domains;

namespace webApi.event_.manha.Interfaces
{
    public interface IPresencasEventoRepository
    {
        void Cadastrar(PresencasEvento presenca);
        void Delete(Guid id);
        List<PresencasEvento> Listar();
        PresencasEvento BuscarPorId(Guid id);
        void Atualizar(Guid id, PresencasEvento presenca);
    }
}
