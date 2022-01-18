// funkcija, kuri skaiciuoja visu likutiniu (neparduotu) prekiu kieki

const inStockTotalCount = (prekiuInfo) => {
  let i = 0;
  let totalStock = 0;
  for (let item of prekiuInfo) {
    let { name, price, inStock, sold } = item;
    totalStock += inStock;
  }
  return console.log(`Turimu prekiu sandelyje: ${totalStock} vnt.`);
};

module.exports = inStockTotalCount;
