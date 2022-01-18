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
const IsValid = require("./lib/IsValid");

(async () => {
  const prekes = [
    "arbata",
    "arba",
    "kvepalai",
    "masina",
    "masina-wrong-1",
    "masina-wrong-2",
    "masina-wrong-3",
    "masina-wrong-4",
    "masina-wrong-5",
    "masina-wrong-6",
    "masina-wrong-7",
    "masina-wrong-8",
    "masina-wrong-9",
    "masina-wrong-10",
    "masina-wrong-11",
    "masina-wrong-12",
    "masina-wrong-13",
    "masina-wrong-14",
    "masina-wrong-15",
    "masina-wrong-16",
    "masina-wrong-17",
    "masina-wrong-18",
    "masina-wrong-19",
    "masina-wrong-20",
    "masina-wrong-21",
    "masina-wrong-22",
    "masina-wrong-23",
    "masina-wrong-24",
    "masina-wrong-25",
    "masina-wrong-26",
    "masina-wrong-27",
    "masina-wrong-28",
    "masina-wrong-29",
    "masina-wrong-30",
    "pomidoras",
    "",
    5,
    true,
    false,
    null,
    () => {},
    [],
    {},
    undefined,
  ];
  const prekiuInfo = [];
  const availableCurrency = ["Eur", "Usd", "Lit"];

  // -----------------------------------------------------
  for (const preke of prekes) {
    if (typeof preke !== "string" || preke === "") {
      continue;
    }
    const itemText = await readFile(preke);
    if (typeof itemText !== "string" || itemText === "") {
      continue;
    }
    const itemObj = jsonParse(itemText);
    if (itemObj === false) {
      continue;
    }

    const { name, price, inStock, sold } = itemObj;
    if (
      !IsValid.correctObject(itemObj, 4) ||
      !IsValid.nonEmptyString(name) ||
      !IsValid.correctObject(price, 2) ||
      !IsValid.nonNegativeNumber(price.value) ||
      !IsValid.nonEmptyString(price.currency) ||
      !availableCurrency.includes(price.currency) ||
      !IsValid.nonNegativeInteger(inStock) ||
      !IsValid.nonNegativeInteger(sold)
    ) {
      continue;
    }
    prekiuInfo.push(itemObj);
  }

  //- susideti visus produktus i viena bendra masyva;

  //console.table(prekiuInfo);

  //- isspausdinti produktu lentele, kuri atordys taip (zr. zemiau)

  console.log(printList(prekiuInfo));

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
    `Maksimali galima parduotuves apyvarta ${
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

let labas = "balamutas";

console.log(labas.length);

console.log(Array.isArray(labas));
