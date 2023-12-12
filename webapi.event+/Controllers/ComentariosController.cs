using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.CognitiveServices.ContentModerator;
using Microsoft.IdentityModel.Tokens;
using System.Security.Cryptography;
using System.Text;
using webapi.event_.Domains;
using webapi.event_.Repositories;

namespace webapi.event_.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    public class ComentariosController : ControllerBase
    {
        ComentariosEventoRepository comentario = new ComentariosEventoRepository();

        //Início da configuração do Controller para a IA

        //Armazena dados do serviço da API externa (IA - Azure)
        private readonly ContentModeratorClient _contentModeratorClient;

        /// <summary>
        /// Construtor que recebe os dados necessários para acesso ao serviço externo
        /// </summary>
        /// <param name="contentModeratorClient"> Objeto do tipo ContentModeratorClient </param>
        public ComentariosController(ContentModeratorClient contentModeratorClient)
        {
            _contentModeratorClient = contentModeratorClient;
        }

        [HttpPost("ComentarioIA")]
        public async Task<IActionResult> PostIA (ComentariosEvento novocomentario)
        {
            try
            {
                if((novocomentario.Descricao).IsNullOrEmpty())
                {
                    return BadRequest("A descrição do comentário não pode estar vazia ou nula!");
                }

                using var stream = new MemoryStream(Encoding.UTF8.GetBytes(novocomentario.Descricao!));

                var moderationResult = await _contentModeratorClient.TextModeration
                    .ScreenTextAsync("text/plain", stream, "por", false, false, null, true);

                if(moderationResult.Terms != null)
                {
                    novocomentario.Exibe = false;
                    comentario.Cadastrar(novocomentario);
                }
                else
                {
                    novocomentario.Exibe = true;
                    comentario.Cadastrar(novocomentario);
                }
            }
            catch (Exception)
            {

            }
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(comentario.Listar());
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet("ListarSomenteExibe")]
        public IActionResult GetExibe()
        {
            try
            {
                return Ok(comentario.ListarSomenteExibe());
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet("BuscarPorIdUsuario/{id}")]
        public IActionResult GetByUserId(Guid id)
        {
            try
            {
                return Ok(comentario.BuscarPorIdUsuario(id));
            }
            catch (Exception)
            {
                throw;
            }
        }

        [HttpPost]
        public IActionResult Post(ComentariosEvento novoComentario)
        {
            try
            {
                comentario.Cadastrar(novoComentario);

                return StatusCode(201, novoComentario);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(Guid id)
        {
            try
            {
                comentario.Deletar(id);

                return NoContent();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
