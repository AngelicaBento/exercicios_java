function temperaturaF(temperatura_C) {
  if(isNaN(temperatura_C)) {
    throw new Error("Os valores informados não são números válidos");
  }
  const resultado = (9 * temperatura_C + 160) / 5;
  return resultado;
}

module.exports = { temperaturaF };
