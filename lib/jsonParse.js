function jsonParse(text) {
  try {
    const obj = JSON.parse(text);
    return [false, obj];
  } catch (error) {
    return [true, {}];
  }
}

module.exports = jsonParse;
