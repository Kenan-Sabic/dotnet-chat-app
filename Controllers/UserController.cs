using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace KenanChatApp.Controllers
{
    [ApiController]
    [Route("api/users")]
    public class UserController : ControllerBase
    {
        private readonly Dictionary<string, string> _userDictionary;

        public UserController()
        {
            _userDictionary = new Dictionary<string, string>();
        }

        // POST /api/users
        [HttpPost]
        public IActionResult CreateUser([FromBody] User user)
        {
            // Add the user to the dictionary
            _userDictionary[user.Id] = user.DisplayName;

            // Return a success response
            return Ok();
        }

        // PUT /api/users/{id}
        [HttpPut("{id}")]
        public IActionResult UpdateUser(string id, [FromBody] User user)
        {
            // Check if the user exists in the dictionary
            if (_userDictionary.TryGetValue(id, out string existingDisplayName))
            {
                // Update the user's display name
                _userDictionary[id] = user.DisplayName;

                // Return a success response
                return Ok();
            }

            // User not found, return a not found response
            return NotFound();
        }

        // DELETE /api/users/{id}
        [HttpDelete("{id}")]
        public IActionResult DeleteUser(string id)
        {
            // Check if the user exists in the dictionary
            if (_userDictionary.Remove(id, out _))
            {
                // Return a success response
                return Ok();
            }

            // User not found, return a not found response
            return NotFound();
        }
    }
}
