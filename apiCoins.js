const coinsList = document.querySelector('ul');
const coinListItem = ({ name, symbol, priceUsd }) => {
  const price = Number(priceUsd).toFixed(2);
  const newItem = document.createElement('li');

  newItem.innerText = `${name} (${symbol}): ${price}`;
  coinsList.append(newItem);
};

const fetchCoins = async () => {
  let list = await fetch('https://api.coincap.io/v2/assets')
    .then((response) => response.json());
  list = list.data.slice(0, 10);
  list.forEach(coinListItem);
};

// Referência: https://developer.mozilla.org/en-US/docs/Web/API/Response/json
fetchCoins();