function somar(numA, numB){
  if(isNaN(numA) || isNaN(numB)){
      throw new Error('Os valores informados não são números válidos');
  }

  return parseInt(numA) + parseInt(numB);
}

module.exports = { somar }
