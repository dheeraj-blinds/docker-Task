using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using System;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;

namespace backend
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var host = CreateWebHostBuilder(args).Build();
            Task.Run(async () =>
            {
                using (var scope = host.Services.CreateScope())
                {
                    var services = scope.ServiceProvider;
                    try
                    {
                        var context = services.GetRequiredService<BackendDb>();
                        await WaitForDb(services);
                        context.Database.EnsureCreated();
                        context.Database.Migrate();
                    }
                    catch (Exception ex)
                    {
                        var logger = services.GetRequiredService<ILogger<Program>>();
                        logger.LogError(ex, "An error occurred seeding the DB.");
                    }
                }
            }).Wait();
            host.Run();

            //CreateWebHostBuilder(args).Build().Run();
        }

        private static async Task WaitForDb(IServiceProvider services)
        {
            var maxAttemps = 12;
            var delay = 5000;

            for (int i = 0; i < maxAttemps; i++)
            {
                Console.WriteLine("Attempting to connect to database # " + i);


                if (CheckDatabaseConnectivity(services))
                {

                    return;
                }
                await Task.Delay(delay);
            }

            // after a few attempts we give up
            throw new Exception("Unable to connect to database ");
        }
        private static bool CheckDatabaseConnectivity(IServiceProvider services)
        {
            var context = services.GetRequiredService<BackendDb>();
            
            try
            {
                context.Database.EnsureCreated();
                return context.Database.CanConnect();
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                return false;
            }


        }
        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .ConfigureAppConfiguration((context, config) =>
                {
                    config.AddJsonFile("appsettings.secrets.json");
                })
                .UseStartup<Startup>();
    }
}
