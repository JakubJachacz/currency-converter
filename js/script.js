const calculateResult = (amount, currency) => {
  const EUR = 4.4278;
  const USD = 4.1111;

  switch (currency) {
    case "EUR":
      return amount / EUR;

    case "USD":
      return amount / USD;
  }
};

const updateResultText = (amount, result, currency) => {
  const resultElement = document.querySelector("#js-result");
  resultElement.innerHTML = `${amount.toFixed(2)} PLN = <strong>${result.toFixed(2)} ${currency}</strong>`;
};

const onConvertClick = (event) => {
  event.preventDefault();

  const amountElement = document.querySelector(".js-amount");
  const currencyElement = document.querySelector(".js-currency");

  const amount = +amountElement.value;
  const currency = currencyElement.value;

  const result = calculateResult(amount, currency);

  updateResultText(amount, result, currency);
};

const init = () => {
  const formElement = document.querySelector(".js-form");
  const convertButton = document.querySelector(".js-convert");

  formElement.addEventListener("submit", (event) => {
    event.preventDefault();
  });

  convertButton.addEventListener("click", onConvertClick);
};

init();