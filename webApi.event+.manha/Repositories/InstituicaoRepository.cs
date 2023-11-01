using webApi.event_.manha.Contexts;
using webApi.event_.manha.Domains;
using webApi.event_.manha.Interfaces;

namespace webApi.event_.manha.Repositories
{
    public class InstituicaoRepository : IInstituicaoRepository
    {
        EventContext _eventContext = new EventContext();

        public Instituicao BuscarPorId(Guid id)
        {
            return _eventContext.Instituicao.FirstOrDefault(z => z.IdInstituicao == id);
        }

        public void Cadastrar(Instituicao instituicao)
        {
            _eventContext.Instituicao.Add(instituicao);

            _eventContext.SaveChanges();
        }
    }
}
