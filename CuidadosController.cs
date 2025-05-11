using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;
using ZooApi.Models;
using ZooApi.Data;

namespace ZooApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CuidadosController : ControllerBase
    {
        private readonly ZooContext _context;

        public CuidadosController(ZooContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Cuidado>>> GetCuidados()
        {
            return Ok(await _context.Cuidados.ToListAsync());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Cuidado>> GetCuidado(int id)
        {
            var cuidado = await _context.Cuidados.FindAsync(id);
            if (cuidado == null)
                return NotFound();
            return Ok(cuidado);
        }

        [HttpPost]
        public async Task<ActionResult<Cuidado>> PostCuidado(Cuidado cuidado)
        {
            _context.Cuidados.Add(cuidado);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetCuidado), new { id = cuidado.Id }, cuidado);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutCuidado(int id, Cuidado cuidado)
        {
            if (id != cuidado.Id)
                return BadRequest();

            _context.Entry(cuidado).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCuidado(int id)
        {
            var cuidado = await _context.Cuidados.FindAsync(id);
            if (cuidado == null)
                return NotFound();

            _context.Cuidados.Remove(cuidado);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}








