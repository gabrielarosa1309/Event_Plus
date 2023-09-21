using webApi.event_.manha.Domains;

namespace webApi.event_.manha.Interfaces
{
    public interface IUsuarioRepository
    {
        void Cadastrar(Usuario usuario);
        Usuario BuscarPorId(Guid id);

        Usuario BuscarPorEmailSenha(string email, string senha);
    }
}
