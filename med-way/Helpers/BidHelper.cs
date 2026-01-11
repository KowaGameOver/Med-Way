using System.Text.RegularExpressions;

namespace med_way.Helpers
{
    internal static class BidHelper
    {
        internal static string NormalizePhone(string phone)
        {
            phone = phone.Trim();
            phone = Regex.Replace(phone, @"[^\d+]", "");

            if (!phone.StartsWith("+") && phone.Length == 10)
                phone = "+38" + phone; 

            return phone;
        }

        internal static bool IsValidPhone(string phone)
            => Regex.IsMatch(phone, @"^\+380\d{9}$");
    }
}
