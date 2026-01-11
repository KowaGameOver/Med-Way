using Telegram.Bot.Types.Enums;
using Telegram.Bot;

namespace med_way.Services
{
    public class TelegramUpdateService : BackgroundService
    {
        private string _chatId;
        private readonly ITelegramBotClient _bot;

        public TelegramUpdateService(IConfiguration config)
        {
            _chatId = config["Telegram:ChatId"]!;
            _bot = new TelegramBotClient(config["Telegram:BotToken"]!);
        }

        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {
            int offset = 0;

            while (!stoppingToken.IsCancellationRequested)
            {
                var updates = await _bot.GetUpdates(offset, cancellationToken: stoppingToken);

                foreach (var update in updates)
                {
                    offset = update.Id + 1;

                    if (update.Type == UpdateType.CallbackQuery)
                    {
                        var cb = update.CallbackQuery;

                        if (cb?.Data == "bid_done" && cb.Message != null)
                        {
                            var oldText = cb.Message.Text ?? "";

                            var newText =
                                $"""
                                ✅ ЗАЯВКА ОПРАЦЬОВАНА
                                
                                {oldText.Replace("📥 НОВА ЗАЯВКА НА ПРИЙОМ\n\n", "")}
                                """;

                            await _bot.EditMessageText(
                                chatId: _chatId,
                                messageId: cb.Message.MessageId,
                                text: newText,
                                cancellationToken: stoppingToken
                            );
                        }
                    }
                }

                await Task.Delay(1000, stoppingToken);
            }
        }
    }
}
