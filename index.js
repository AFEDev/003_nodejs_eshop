console.clear();

console.log(
  "----------------------------------------------------------------------------------------------------"
);

const readFile = require("./lib/readFile.js");
const inStockTotalCount = require("./lib/inStockTotalCount.js");
const jsonParse = require("./lib/jsonParse.js");
const printList = require("./lib/printList.js");
const profit = require("./lib/profit.js");
const soldTotalCount = require("./lib/soldTotalCount.js");
const futureProfit = require("./lib/futureProfit.js");

(async () => {
  const prekes = ["arbata", "kvepalai", "masina", "kebabas"];
  const prekiuInfo = [];

  for (const preke of prekes) {
    const content = await readFile(preke);

    if (typeof content === "string") {
      if (jsonParse(content)[0] !== true) {
        prekiuInfo.push(jsonParse(content)[1]);
      } else {
        console.log("Klaida parsinant:", preke);
      }
    } else {
      console.log("Failas neegzistuoja:", preke);
    }
  }

  //- susideti visus produktus i viena bendra masyva;

  console.table(prekiuInfo);

  //- isspausdinti produktu lentele, kuri atordys taip (zr. zemiau)

  printList(prekiuInfo);

  //- turimu prekiu sandelyje: [total kiekis]

  inStockTotalCount(prekiuInfo);

  //- parduotu prekiu: [total kiekis]

  soldTotalCount(prekiuInfo);

  //- suprekiauta suma: [total pinigu] [valiuta]
  profit(prekiuInfo);

  //- galimu pardavimu: [total pinigu] [valiuta]

  futureProfit(prekiuInfo);

  //- maksimali galima parduotuves apyvarta: [total pinigu] [valiuta]

  console.log(
    `maksimali galima parduotuves apyvarta ${
      profit(prekiuInfo) + futureProfit(prekiuInfo)
    } ${prekiuInfo[0].price.currency}`
  );
})();

/*
UZDUOTIS:
- perskaityti visu produktu failus;
- susideti visus produktus i viena bendra masyva;
- isspausdinti produktu lentele, kuri atordys taip (zr. zemiau)
"Univermagas" pardavime turi:
-----------------------------
1) Prekes pavadinimas: [kaina] [valiuta]; parduota: [kiekis]; likutis: [kiekis];
2) Prekes pavadinimas: [kaina] [valiuta]; parduota: [kiekis]; likutis: [kiekis];
3) Prekes pavadinimas: [kaina] [valiuta]; parduota: [kiekis]; likutis: [kiekis];
-----------------------------
Parduotuves suvestine:
- turimu prekiu sandelyje: [total kiekis]
- parduotu prekiu: [total kiekis]
- suprekiauta suma: [total pinigu] [valiuta]
- galimu pardavimu: [total pinigu] [valiuta]
- maksimalus galima parduotuves apyvarta: [total pinigu] [valiuta]
*/
