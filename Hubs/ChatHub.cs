using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace KenanChatApp
{
    public class ChatHub : Hub
    {
        public async Task SendMessage(string user, string message)
        {
            // Broadcast the received message to all connected clients
            await Clients.All.SendAsync("ReceiveMessage", user, message);
        }
    }
}
