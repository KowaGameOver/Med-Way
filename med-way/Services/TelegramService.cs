using Telegram.Bot;
using Telegram.Bot.Types.ReplyMarkups;

namespace med_way.Services
{
    public class TelegramService
    {
        private readonly string _token = "8230029219:AAFbUN4E-WFSe2SM02t_ZGgEnYSwGOXSTOE";
        private readonly string _chatId = "-5245845854";
        private readonly ITelegramBotClient _botClient;
        public TelegramService(IConfiguration configuration)
        {
            _botClient = new TelegramBotClient(_token);
        }

        public async Task SendAsync(string text)
        {
            var keyboard = new InlineKeyboardMarkup(
                InlineKeyboardButton.WithCallbackData(
                    "✅ Заявка опрацьована",
                    "bid_done"));

            await _botClient.SendMessage(
                chatId: _chatId,
                text: text,
                replyMarkup: keyboard
            );
        }
    }
}
