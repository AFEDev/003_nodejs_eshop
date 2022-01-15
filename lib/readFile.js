const fs = require("fs/promises");
const path = require("path");

async function readFile(fileName) {
  try {
    const filePath = path.join(__dirname, "../data/" + fileName + ".json");
    const fileContent = await fs.readFile(filePath, "utf-8");
    return fileContent;
  } catch (error) {
    return [true, {}];
  }
}

module.exports = readFile;

// const fullPath = path.join(__dirname, "./data/country.json");
// const countryContent = await fs.readFile(fullPath, "utf-8");
