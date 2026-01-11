using med_way.DTOs;
using med_way.Helpers;
using med_way.Services;

using Microsoft.AspNetCore.Mvc;

namespace med_way.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BidController : ControllerBase
    {
        private readonly IConfiguration _config;
        private readonly ILogger<BidController> _logger;
        private readonly TelegramService _telegramService;

        public BidController(
            IConfiguration config,
            ILogger<BidController> logger,
            TelegramService telegramService)
        {
            _config = config;
            _logger = logger;
            _telegramService = telegramService;
        }

        [HttpPost(Name = "LeaveBid")]
        public async Task<IActionResult> LeaveBid(BidDTO bid)
        {
            try
            {
                var apiKey = Request.Headers["API-KEY"].ToString();
                var expected = _config["APP:ApiKey"];

                if (apiKey != expected)
                    return Unauthorized();

                if (bid is null)
                    return BadRequest("Bid is empty");

                if (string.IsNullOrWhiteSpace(bid.Name))
                    return BadRequest("Name is required");

                if (string.IsNullOrWhiteSpace(bid.Surname))
                    return BadRequest("Surname is required");

                if (string.IsNullOrWhiteSpace(bid.PhoneNumber))
                    return BadRequest("Phone is required");

                var normalizedPhone = BidHelper.NormalizePhone(bid.PhoneNumber);

                if (!BidHelper.IsValidPhone(normalizedPhone))
                    return BadRequest("Invalid phone number");

                var message =
                $"""
                📥 НОВА ЗАЯВКА НА ПРИЙОМ
                
                👤 Пацієнт: {bid.Name} {bid.Surname}
                📞 Телефон: {normalizedPhone}
                🕒 Час: {DateTime.Now:dd.MM.yyyy HH:mm}
                """;

                await _telegramService.SendAsync(message);

                return Ok(new { success = true });
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex);
            }
        }
    }
}
