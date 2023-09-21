function peso(peso1, peso2, peso3, peso4, peso5) {
  if(isNaN(peso1) || isNaN(peso2) || isNaN(peso3) || isNaN(peso4) || isNaN(peso5)){
    throw new Error('Os valores informados não são números válidos');
  }
  const resultado = (peso1 + peso2 + peso3 + peso4 + peso5) / 5;
  return resultado;

}

module.exports = { peso };
