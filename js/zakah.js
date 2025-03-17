function calculateZakat(event) {
  event.preventDefault();

  const moneyAmount = document.getElementById("moneyAmount").value;
  const goldAmount = document.getElementById("goldAmount").value;
  const goldPrice = document.getElementById("goldPrice").value;
  const silverAmount = document.getElementById("silverAmount").value;
  const silverPrice = document.getElementById("silverPrice").value;

  const totalMoneyZakat = moneyAmount * 0.025;
  const totalGoldZakat = goldAmount * goldPrice * 0.025;
  const totalSilverZakat = silverAmount * silverPrice * 0.025;

  const totalZakatAmount = totalMoneyZakat + totalGoldZakat + totalSilverZakat;

  document.getElementById("totalZakatAmount").textContent =
    totalZakatAmount.toFixed(2) + " د.أ";
}
