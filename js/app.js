const currencyOne = document.querySelector("#yourCurrency");
const currencyTwo = document.querySelector("#exchangeCurrency");
const amountOne = document.querySelector(".amount-1");
const amountTwo = document.querySelector(".amount-2");

const headingRateText = document.querySelector(".heading-rate-text");
const rateTextOne = document.querySelector(".rate-one");
const rateTextTwo = document.querySelector(".rate-two");
const swap = document.querySelector(".btn-swap");

const calculate = () => {
  const baseCurrencyOne = currencyOne.value;
  const baseCurrencyTwo = currencyTwo.value;
  fetch(`https://api.exchangerate-api.com/v4/latest/${baseCurrencyOne}`)
    .then(res => res.json())
    .then(result => {
      const rate = result.rates[baseCurrencyTwo];
      console.log(rate);

      rateTextOne.innerText = `1 ${
        currencyOne.options[currencyOne.selectedIndex].text
      } equals`;

      rateTextTwo.innerText = ` ${rate} ${
        currencyTwo.options[currencyTwo.selectedIndex].text
      }`;

      amountTwo.value = (amountOne.value * rate).toFixed(2);
    });
};

const handleClick = () => {
  const temp = currencyOne.value;
  currencyOne.value = currencyTwo.value;
  currencyTwo.value = temp;
};

currencyOne.addEventListener("change", calculate);
currencyTwo.addEventListener("change", calculate);
amountOne.addEventListener("input", calculate);
amountTwo.addEventListener("input", calculate);
swap.addEventListener("click", handleClick);

calculate();
