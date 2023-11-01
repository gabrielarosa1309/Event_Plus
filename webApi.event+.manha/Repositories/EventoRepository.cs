using webApi.event_.manha.Contexts;
using webApi.event_.manha.Domains;
using webApi.event_.manha.Interfaces;

namespace webApi.event_.manha.Repositories
{
    public class EventoRepository : IEventoRepository
    {
        EventContext _eventContext = new EventContext();

        public void Atualizar(Guid id, Evento evento)
        {
            Evento eventoBuscado = _eventContext.Evento.Find(id)!;

            if (eventoBuscado != null)
            {
                eventoBuscado.NomeEvento = evento.NomeEvento;
            }

            _eventContext.Evento.Update(eventoBuscado!);

            _eventContext.SaveChanges();
        }

        public Evento BuscarPorId(Guid id)
        {
            return _eventContext.Evento.FirstOrDefault(z => z.IdEvento == id)!;
        }

        public void Cadastrar(Evento evento)
        {
            _eventContext.Evento.Add(evento);

            _eventContext.SaveChanges();
        }

        public void Delete(Guid id)
        {
            _eventContext.Remove(id);

            _eventContext.SaveChanges();
        }

        public List<Evento> Listar()
        {
            return _eventContext.Evento.ToList();
        }
    }
}
