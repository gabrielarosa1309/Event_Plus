using webApi.event_.manha.Contexts;
using webApi.event_.manha.Domains;
using webApi.event_.manha.Interfaces;

namespace webApi.event_.manha.Repositories
{
    public class PresencasEventoRepository : IPresencasEventoRepository
    {
        EventContext _eventContext = new EventContext();

        public void Atualizar(Guid id, PresencasEvento presenca)
        {
            PresencasEvento presencaBuscada = _eventContext.PresencaEvento.Find(id)!;

            if (presencaBuscada.Situacao == true)
            {
                presencaBuscada.Situacao = false;
            }

            _eventContext.PresencaEvento.Update(presencaBuscada);

            _eventContext.SaveChanges();
        }

        public PresencasEvento BuscarPorId(Guid id)
        {
            return _eventContext.PresencaEvento.FirstOrDefault(z => z.IdPresencaEvento == id)!;
        }

        public void Cadastrar(PresencasEvento presenca)
        {
            _eventContext.PresencaEvento.Add(presenca);

            _eventContext.SaveChanges();
        }

        public void Delete(Guid id)
        {
            _eventContext.Remove(id);

            _eventContext.SaveChanges();
        }

        public List<PresencasEvento> Listar()
        {
            return _eventContext.PresencaEvento.ToList();
        }
    }
}
