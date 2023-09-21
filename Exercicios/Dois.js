function valor_receber(valor_hr, qtde_horas){
  if(isNaN(valor_hr) || isNaN(qtde_horas)){
      throw new Error('Os valores informados não são números válidos');
  }
  
  return valor_hr * qtde_horas;
}

module.exports = { valor_receber }

