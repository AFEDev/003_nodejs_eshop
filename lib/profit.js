// funkcija, kuri skaiciuoja uzdirbtu pinigu kieki (kiek suprekiauta)

const profit = (prekiuInfo) => {
  let i = 0;
  let totalProfit = 0;
  for (let item of prekiuInfo) {
    [item[i]] = prekiuInfo;
    let { name, price, inStock, sold } = item;
    totalProfit += price.value * sold;
  }
  console.log(
    `Suprekiauta suma: ${totalProfit} ${prekiuInfo[i].price.currency}`
  );
  return totalProfit;
};

module.exports = profit;
