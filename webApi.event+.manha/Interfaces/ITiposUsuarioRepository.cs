using webApi.event_.manha.Domains;

namespace webApi.event_.manha.Interfaces
{
    public interface ITiposUsuarioRepository
    {
        void Cadastrar(TiposUsuario tipoUsuario);
        void Delete(Guid id);
        List<TiposUsuario> Listar();
        TiposUsuario BuscarPorId(Guid id);
        void Atualizar(Guid id, TiposUsuario tipoUsuario);
    }
}