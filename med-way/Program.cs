
using med_way.Services;

namespace med_way
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            builder.Services.AddControllers();

            var app = builder.Build();

            app.MapGet("/", () => "OK");

            app.Run();
        }
    }
}
