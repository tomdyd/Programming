using LabStore.Models;
using LabStore.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Runtime.CompilerServices;

namespace LabStore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValvesController : ControllerBase
    {
        private readonly ValvesService _valvesService;

        public ValvesController(ValvesService valvesService)
        {
            _valvesService = valvesService;
        }

        // GET: api/<RawMaterialsController>
        [HttpGet]
        public async Task<List<Valves>> Get()
        {
            return await _valvesService.GetAsync();
        }
        [HttpGet("{id:length(24)}")]
        public async Task<ActionResult<Valves>> GetById(string id)
        {
            var valve = await _valvesService.GetAsyncById(id);

            if (valve == null)
            {
                return NotFound();
            }

            return Ok(valve);
        }

        [HttpGet("Name")]
        public async Task<ActionResult<Valves>> GetByName(string name)
        {
            var valve = await _valvesService.GetAsyncByName(name);

            if (valve == null)
            {
                return NotFound();
            }

            return Ok(valve);
        }

        [HttpPost]
        public async Task<ActionResult<Valves>> Create(Valves newValve)
        {
            await _valvesService.CreateAsync(newValve);

            return CreatedAtAction(nameof(Get), new { id = newValve._id }, newValve);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(Valves updatedValve, string id)
        {
            var valve = await _valvesService.GetAsyncById(id);

            if (valve is null)
            {
                return NotFound();
            }

            updatedValve._id = valve._id;

            await _valvesService.UpdateAsync(updatedValve, id);

            return Ok(updatedValve);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            var valve = await _valvesService.GetAsyncById(id);

            if (valve is null)
            {
                return NotFound();
            }

            await _valvesService.DeleteAsync(id);

            return NoContent();
        }
    }
}


