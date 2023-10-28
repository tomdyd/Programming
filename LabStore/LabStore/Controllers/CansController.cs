using LabStore.Models;
using LabStore.Services;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace LabStore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CansController : ControllerBase
    {
        private readonly CansService _cansService;
        public CansController(CansService cansService)
        {
            _cansService = cansService;
        }
        // GET: api/<CansController>
        [HttpGet]
        public async Task<List<Cans>> Get() => await _cansService.GetAsync();

        // GET api/<CansController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Cans>> GetById(string id)
        {
            var can = await _cansService.GetAsyncById(id);

            if (can is null)
            {
                return NotFound();
            }

            return Ok(can);
        }

        [HttpGet("Name")]
        public async Task<ActionResult<Cans>> GetAsyncByName(string name)
        {
            var can = await _cansService.GetAsyncByName(name);

            if (can is null)
            {
                return NotFound();
            }

            return Ok(can);
        }

        // POST api/<CansController>
        [HttpPost]
        public async Task<IActionResult> Post(Cans newCan)
        {
            await _cansService.CreateAsync(newCan);

            return CreatedAtAction(nameof(Get), new { id = newCan._id }, newCan);
        }

        // PUT api/<CansController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(string id, Cans updatedCan)
        {
            var can = await _cansService.GetAsyncById(id);

            if (can is null)
            {
                return NotFound();
            }

            updatedCan._id = can._id;

            await _cansService.UpdateAsync(id, updatedCan);

            return Ok(updatedCan);
        }

        // DELETE api/<CansController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            var can = await _cansService.GetAsyncById(id);

            if (can is null)
            {
                return NotFound();
            }

            await _cansService.RemoveAsync(id);

            return NoContent();
        }
    }
}
