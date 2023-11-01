using webApi.event_.manha.Domains;

namespace webApi.event_.manha.Interfaces
{
    public interface IInstituicaoRepository
    {
        void Cadastrar(Instituicao instituicao);
        Instituicao BuscarPorId(Guid id);
    }
}

