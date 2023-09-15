function trocaValores(numeros){
    let numC = numeros[0];

    numeros[0] = numeros[1];
    numeros[1] = numC;

    return `Primeiros valores: [numA = ${numeros[1]} | numB = ${numeros[0]}]
    Valores trocados: [numA = ${numeros[0]} | numB = ${numeros[1]}]`;
}

module.exports = { trocaValores }