using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using webApi.event_.manha.Domains;
using webApi.event_.manha.Repositories;

namespace webApi.event_.manha.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    public class TiposUsuarioController : ControllerBase
    {
        private TiposUsuarioRepository _TiposUsuarioRepository;

        public TiposUsuarioController()
        {
            _TiposUsuarioRepository = new TiposUsuarioRepository();
        }

        [HttpPost]

        public IActionResult Post(TiposUsuario tiposUsuario)
        {
            try
            {
                _TiposUsuarioRepository.Cadastrar(tiposUsuario);

                return StatusCode(201);
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
        }
    }
}
