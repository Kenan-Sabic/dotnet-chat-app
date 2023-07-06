using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace KenanChatApp
{
    public class Startup
    {
        
        
        private readonly IConfiguration _configuration;

        public Startup(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public void ConfigureServices(IServiceCollection services)
        {
            // Configure services such as database access, authentication, etc.
            // For example:
            // services.AddDbContext<YourDbContext>();
            // services.AddAuthentication();
            // services.AddAuthorization();
            services.AddSignalR();
             Dictionary<string, User> userDictionary = new Dictionary<string, User>();
             services.AddSingleton(userDictionary);

        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            // Configure middleware components
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseRouting();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
    {
        endpoints.MapControllerRoute(
            name: "default",
            pattern: "{controller=Home}/{action=Index}/{id?}");

        endpoints.MapHub<ChatHub>("/chatHub");    
        
        endpoints.MapControllerRoute(
            name: "chat",
            pattern: "chat",
            defaults: new { controller = "Chat", action = "Chat" });
        endpoints.MapFallbackToFile("index.html");    
    });
        }
    }
}
