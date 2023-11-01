using webApi.event_.manha.Contexts;
using webApi.event_.manha.Domains;
using webApi.event_.manha.Interfaces;

namespace webApi.event_.manha.Repositories
{
    public class ComentariosEventoRepository : IComentariosEventoRepository
    {
        EventContext _eventContext = new EventContext();

        public ComentariosEvento BuscarPorId(Guid id)
        {
            return _eventContext.ComentarioEvento.FirstOrDefault(z => z.IdComentarioEvento == id);
        }

        public void Cadastrar(ComentariosEvento comentario)
        {
            _eventContext.ComentarioEvento.Add(comentario);

            _eventContext.SaveChanges();
        }

        public void Delete(Guid id)
        {
            _eventContext.Remove(id);

            _eventContext.SaveChanges();
        }

        public List<ComentariosEvento> Listar()
        {
            return _eventContext.ComentarioEvento.ToList();
        }
    }
}
