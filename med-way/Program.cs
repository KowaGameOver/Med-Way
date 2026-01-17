
using med_way.Services;

namespace med_way
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            var port = Environment.GetEnvironmentVariable("PORT") ?? "8080";
            builder.WebHost.UseUrls($"http://0.0.0.0:{port}");

            var app = builder.Build();

            app.MapGet("/", () => "OK");

            app.Run();
        }
    }
}
