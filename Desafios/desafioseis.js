function valoresFibonacci(qntdeTermos){
    let valoresFibonacci = [];
    let numA = 0;
    let numB = 1; 
    let resultado;

    for(let i = 0; i < qntdeTermos; i++){
        resultado = numA + numB;
        valoresFibonacci[i] = resultado;

        numA = numB;
        numB = resultado;
    }

    return valoresFibonacci
}

module.exports = { valoresFibonacci }