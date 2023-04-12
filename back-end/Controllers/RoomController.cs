using backend.Models;
using backend.Services;
using Microsoft.AspNetCore.Mvc;
namespace backend.Controllers;

[ApiController]
[Route("[controller]")]

public class RoomController : ControllerBase
{
    public RoomController()
    {

    }

    [HttpGet]
    public ActionResult<List<Room>> GetAll() => RoomService.GetAll();

    [HttpGet("{id}")]
    public ActionResult<Room> Get(int id)
    {
        var room = RoomService.Get(id);

        if (room == null)
            return NotFound();

        return room;
    }
    [HttpPut("{id}")]
    public IActionResult ToggleLike(int id)
    {
        RoomService.ToggleLike(id);
        Console.Write(id);
        return NoContent();
    }
}