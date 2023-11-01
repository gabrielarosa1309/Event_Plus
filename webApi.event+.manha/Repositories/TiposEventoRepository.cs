using webApi.event_.manha.Contexts;
using webApi.event_.manha.Domains;
using webApi.event_.manha.Interfaces;

namespace webApi.event_.manha.Repositories
{
    public class TiposEventoRepository : ITiposEventoRepository
    {
        EventContext _eventContext = new EventContext();

        public void Atualizar(Guid id, TiposEvento tipoEvento)
        {
            TiposEvento tipoEventoBuscado = _eventContext.TipoEvento.Find(id)!;

            if (tipoEventoBuscado != null)
            {
                tipoEventoBuscado.Titulo = tipoEvento.Titulo;
            }

            _eventContext.TipoEvento.Update(tipoEventoBuscado!);

            _eventContext.SaveChanges();
        }

        public TiposEvento BuscarPorId(Guid id)
        {
            return _eventContext.TipoEvento.FirstOrDefault(z => z.IdTipoEvento == id);
        }

        public void Cadastrar(TiposEvento tipoEvento)
        {
            _eventContext.TipoEvento.Add(tipoEvento);

            _eventContext.SaveChanges();
        }

        public void Delete(Guid id)
        {
            _eventContext.Remove(id);

            _eventContext.SaveChanges();
        }

        public List<TiposEvento> Listar()
        {
            return _eventContext.TipoEvento.ToList();
        }
    }
}
