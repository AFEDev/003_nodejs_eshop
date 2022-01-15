// funkcija, kuri apskaiciuoja, uz kiek dar galima suprekiauti is likusiu prekiu

const futureProfit = (prekiuInfo) => {
  let i = 0;
  let totalFutureProfit = 0;
  for (let item of prekiuInfo) {
    [item[i]] = prekiuInfo;
    let { name, price, inStock, sold } = item;
    totalFutureProfit += price.value * inStock;
  }
  return console.log(
    `Galimu pardavimu: ${totalFutureProfit} ${prekiuInfo[i].price.currency}`
  );
};

module.exports = futureProfit;
