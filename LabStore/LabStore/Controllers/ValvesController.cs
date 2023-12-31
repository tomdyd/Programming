﻿using LabStore.Models;
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

        [HttpGet("{index}")]
        public async Task<ActionResult<Valves>> GetByIndex(string index)
        {
            var valve = await _valvesService.GetAsyncByIndex(index);

            if (valve == null)
            {
                return NotFound();
            }

            return Ok(valve);
        }

        [HttpGet("Destiny")]
        public async Task<ActionResult<Valves>> GetByDestiny(string destiny)
        {
            var valve = await _valvesService.GetAsyncByDestiny(destiny);

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

        [HttpPut("{index}")]
        public async Task<IActionResult> Update(Valves updatedValve, string index)
        {
            var valve = await _valvesService.GetAsyncByIndex(index);

            if (valve is null)
            {
                return NotFound();
            }

            updatedValve._id = valve._id;

            await _valvesService.UpdateAsync(updatedValve, index);

            return Ok(updatedValve);
        }

        [HttpDelete("{index}")]
        public async Task<IActionResult> Delete(string index)
        {
            var valve = await _valvesService.GetAsyncByIndex(index);

            if (valve is null)
            {
                return NotFound();
            }

            await _valvesService.DeleteAsync(index);

            return NoContent();
        }
    }
}


