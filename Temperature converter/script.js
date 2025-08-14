document.getElementById("convertBtn").addEventListener("click", convertTemp);

function convertTemp() {
  const tempInput = document.getElementById("tempInput").value.trim();
  const unit = document.getElementById("unitSelect").value;
  const errorMsg = document.getElementById("errorMsg");
  const resultDisplay = document.getElementById("resultDisplay");


  errorMsg.textContent = "";
  resultDisplay.textContent = "";

  if (tempInput === "" || isNaN(tempInput)) {
    errorMsg.textContent = "⚠ Please enter a valid number.";
    return;
  }

  const temp = parseFloat(tempInput);
  let converted = "";

  if (unit === "C") {
    converted = `${(temp * 9/5 + 32).toFixed(2)} °F | ${(temp + 273.15).toFixed(2)} K`;
  } else if (unit === "F") {
    converted = `${((temp - 32) * 5/9).toFixed(2)} °C | ${(((temp - 32) * 5/9) + 273.15).toFixed(2)} K`;
  } else if (unit === "K") {
    converted = `${(temp - 273.15).toFixed(2)} °C | ${((temp - 273.15) * 9/5 + 32).toFixed(2)} °F`;
  }

  resultDisplay.textContent = `Converted: ${converted}`;
}
