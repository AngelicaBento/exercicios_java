function impostoDeRenda(cpf, numDep, rendaMensal) {
    let salarioMinimo = 1302;
    let aliquota;
  
    if (rendaMensal <= salarioMinimo * 2) {
      aliquota = 0;
    } else if (rendaMensal <= salarioMinimo * 3) {
      aliquota = 0.05;
    } else if (rendaMensal <= salarioMinimo * 5) {
      aliquota = 0.1;
    } else if (rendaMensal <= salarioMinimo * 7) {
      aliquota = 0.15;
    } else {
      aliquota = 0.2;
    }
  
    return rendaMensal * aliquota - numDep * 0.05 * salarioMinimo;
  }
  
  module.exports = { impostoDeRenda };