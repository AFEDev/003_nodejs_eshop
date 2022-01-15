// funkcija, kuri gauna prekiu sarasa ir ji isspausdina nurodytu formatu
const printList = (prekiuInfo) => {
  console.log('"Univermagas" pardavime turi:');
  console.log("-----------------------------");
  let i = 0;

  for (let item of prekiuInfo) {
    [item[i]] = prekiuInfo;
    let { name, price, inStock, sold } = item;
    console.log(
      `${++i}) ${name}: ${price.value} ${
        price.currency
      }; parduota: ${sold}; likutis: ${inStock};`
    );
  }
  console.log("-----------------------------");
};

module.exports = printList;

// "Univermagas" pardavime turi:
// -----------------------------
// 1) Prekes pavadinimas: [kaina] [valiuta]; parduota: [kiekis]; likutis: [kiekis];
// 2) Prekes pavadinimas: [kaina] [valiuta]; parduota: [kiekis]; likutis: [kiekis];
// 3) Prekes pavadinimas: [kaina] [valiuta]; parduota: [kiekis]; likutis: [kiekis];
// -----------------------------
