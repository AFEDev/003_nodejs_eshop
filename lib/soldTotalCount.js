// funkcija, kuri skaiciuoja visu parduotu prekiu kieki

const soldTotalCount = (prekiuInfo) => {
  let i = 0;
  let soldTotal = 0;
  for (let item of prekiuInfo) {
    [item[i]] = prekiuInfo;
    let { name, price, inStock, sold } = item;
    soldTotal += sold;
  }
  return console.log(`Viso parduotu prekiu: ${soldTotal} vnt.`);
};

module.exports = soldTotalCount;
