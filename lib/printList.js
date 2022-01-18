// funkcija, kuri gauna prekiu sarasa ir ji isspausdina nurodytu formatu

const IsValid = require("./IsValid.js");

function printList(list) {
  let table = [];

  let i = 0;
  for (const item of list) {
    const { name, price, inStock, sold } = item;

    try {
      table.push(
        `${++i}) ${name}: ${price.value} ${
          price.currency
        }; parduota: ${sold}; likutis: ${item.inStock};`
      );
    } catch (error) {
      console.log("KRITINE KLAIDA");
      continue;
    }
  }

  return table.join("\n");
}

module.exports = printList;
// "Univermagas" pardavime turi:
// -----------------------------
// 1) Prekes pavadinimas: [kaina] [valiuta]; parduota: [kiekis]; likutis: [kiekis];
// 2) Prekes pavadinimas: [kaina] [valiuta]; parduota: [kiekis]; likutis: [kiekis];
// 3) Prekes pavadinimas: [kaina] [valiuta]; parduota: [kiekis]; likutis: [kiekis];
// -----------------------------
