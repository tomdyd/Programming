using LabStore.Models;
using LabStore.Services;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace LabStore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RawMaterialsController : ControllerBase
    {
        private readonly RawMaterialsService _rawMaterialsService;
        public RawMaterialsController(RawMaterialsService rawMaterialsService)
        {
            _rawMaterialsService = rawMaterialsService;
        }
        // GET: api/<RawMaterialsController>
        [HttpGet]
        public async Task<List<RawMaterials>> Get() => await _rawMaterialsService.GetAsync();

        // GET api/<RawMaterialsController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<RawMaterials>> GetById(string id)
        {
            var rawMaterial = await _rawMaterialsService.GetAsyncById(id);

            if (rawMaterial is null)
            {
                return NotFound();
            }

            return Ok(rawMaterial);
        }

        [HttpGet("Name")]
        public async Task<ActionResult<RawMaterials>> GetAsyncByName(string name)
        {
            var rawMaterial = await _rawMaterialsService.GetAsyncByName(name);

            if (rawMaterial is null)
            {
                return NotFound();
            }

            return Ok(rawMaterial);
        }

        // POST api/<RawMaterialsController>
        [HttpPost]
        public async Task<IActionResult> Post(RawMaterials newRawMaterial)
        {
            await _rawMaterialsService.CreateAsync(newRawMaterial);

            return CreatedAtAction(nameof(Get), new { id = newRawMaterial._id }, newRawMaterial);
        }

        // PUT api/<RawMaterialsController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(string id, RawMaterials updatedRawMaterial)
        {
            var can = await _rawMaterialsService.GetAsyncById(id);

            if (can is null)
            {
                return NotFound();
            }

            updatedRawMaterial._id = can._id;

            await _rawMaterialsService.UpdateAsync(id, updatedRawMaterial);

            return Ok(updatedRawMaterial);
        }

        // DELETE api/<RawMaterialsController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            var rawMaterial = await _rawMaterialsService.GetAsyncById(id);

            if (rawMaterial is null)
            {
                return NotFound();
            }

            await _rawMaterialsService.RemoveAsync(id);

            return NoContent();
        }
    }
}
