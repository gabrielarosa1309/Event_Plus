using Microsoft.EntityFrameworkCore;
using webApi.event_.manha.Contexts;
using webApi.event_.manha.Domains;
using webApi.event_.manha.Interfaces;


namespace webApi.event_.manha.Repositories
{
    public class TiposUsuarioRepository : ITiposUsuarioRepository
    {
        private readonly EventContext _eventContext;

        public TiposUsuarioRepository()
        {
            _eventContext = new EventContext();
        }

        public void Atualizar(Guid id, TiposUsuario tipoUsuario)
        {
            TiposUsuario tipoUsuarioBuscado = _eventContext.TipoUsuario.Find(id)!;

            if (tipoUsuarioBuscado != null)
            {
                tipoUsuarioBuscado.Titulo = tipoUsuario.Titulo;
            }

            _eventContext.TipoUsuario.Update(tipoUsuarioBuscado!);

            _eventContext.SaveChanges();
        }

        public TiposUsuario BuscarPorId(Guid id)
        {
            return _eventContext.TipoUsuario.FirstOrDefault(z => z.IdTipoUsuario == id);
        }

        public void Cadastrar(TiposUsuario tipoUsuario)
        {
            _eventContext.TipoUsuario.Add(tipoUsuario);

            _eventContext.SaveChanges();
        }

        public void Delete(Guid id)
        {
            _eventContext.Remove(id);

            _eventContext.SaveChanges();
        }

        public List<TiposUsuario> Listar()
        {
            return _eventContext.TipoUsuario.ToList();
        }
    }
}