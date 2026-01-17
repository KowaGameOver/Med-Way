
using med_way.Services;

namespace med_way
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            var port = int.Parse(Environment.GetEnvironmentVariable("PORT")!);

            builder.WebHost.ConfigureKestrel(options =>
            {
                options.ListenAnyIP(port);
            });

            var app = builder.Build();

            app.MapGet("/", () => "OK");

            app.Run();
        }
    }
}
