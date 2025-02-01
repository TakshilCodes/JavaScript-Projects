// Updated base URL
const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

// Ensure DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
  const fromCurr = document.getElementById("from-currency");
  const toCurr = document.getElementById("to-currency");
  const btn = document.getElementById("convert-btn");
  const amountInput = document.getElementById("amount");
  const msg = document.getElementById("exchange-rate");

  // Ensure elements exist before running the script
  if (!fromCurr || !toCurr || !btn || !amountInput || !msg) {
    console.error("One or more elements are missing. Check HTML structure.");
    return;
  }

  // Populate dropdowns with currency options
  const populateDropdowns = () => {
    fromCurr.innerHTML = "";
    toCurr.innerHTML = "";

    for (let currCode in countryList) {
      let option1 = document.createElement("option");
      let option2 = document.createElement("option");
      option1.value = currCode;
      option2.value = currCode;
      option1.innerText = currCode;
      option2.innerText = currCode;
      
      // Default selections
      if (currCode === "USD") option1.selected = true;
      if (currCode === "INR") option2.selected = true;

      fromCurr.appendChild(option1);
      toCurr.appendChild(option2);
    }
  };

  populateDropdowns(); // Call function to populate dropdowns

  // Function to update flag images
  const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let img = element.parentElement.querySelector("img");

    img.src = countryCode
      ? `https://flagsapi.com/${countryCode}/flat/64.png`
      : "https://via.placeholder.com/64"; // Default fallback image
  };

  fromCurr.addEventListener("change", () => updateFlag(fromCurr));
  toCurr.addEventListener("change", () => updateFlag(toCurr));

  // Function to fetch exchange rate
  const updateExchangeRate = async () => {
    let amtVal = parseFloat(amountInput.value);
    if (isNaN(amtVal) || amtVal < 1) {
      amtVal = 1;
      amountInput.value = "1";
    }

    const fromCurrency = fromCurr.value.toLowerCase();
    const toCurrency = toCurr.value.toLowerCase();
    const URL = `${BASE_URL}/${fromCurrency}.json`;

    try {
      let response = await fetch(URL);
      if (!response.ok) throw new Error("Failed to fetch exchange rate");

      let data = await response.json();
      let rate = data[fromCurrency]?.[toCurrency];

      if (!rate) throw new Error("Exchange rate not available");

      let finalAmount = amtVal * rate;
      msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount.toFixed(2)} ${toCurr.value}`;
    } catch (error) {
      msg.innerText = "Error fetching exchange rate. Please try again.";
      console.error(error);
    }
  };

  // Event listener for button click
  btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    updateExchangeRate();
  });

  // Fetch exchange rate on initial page load
  updateExchangeRate();
});
