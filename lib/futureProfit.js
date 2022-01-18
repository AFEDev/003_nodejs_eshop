// funkcija, kuri apskaiciuoja, uz kiek dar galima suprekiauti is likusiu prekiu

const futureProfit = (prekiuInfo) => {
  let i = 0;
  let totalFutureProfit = 0;
  for (let item of prekiuInfo) {
    let { name, price, inStock, sold } = item;
    totalFutureProfit += price.value * inStock;
  }
  console.log(
    `Galimu pardavimu: ${totalFutureProfit} ${prekiuInfo[i].price.currency}`
  );
  return totalFutureProfit;
};

module.exports = futureProfit;
