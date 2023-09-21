function NumPosParMult(numeros){
    let positivos = 0;
    let pares = 0;
    let multiplosSete = 0;

    if(numeros.length > 10 || numeros.length < 10){
        return `Digite dez números: ${numeros.length}`;
    }else{
        for(let i = 0; i < 10; i++){
            if(numeros[i] >= 0){
                positivos++;
            }
            if(numeros[i] % 2 == 0){
                pares++;
            }
            if(numeros[i] % 7 == 0){
                multiplosSete++;
            }
        }

        return `${positivos} de 10 são Positivos | ${pares} de 10 são Pares | ${multiplosSete} de 10 são Múltiplos de 7`;
    }
}

module.exports = { NumPosParMult }