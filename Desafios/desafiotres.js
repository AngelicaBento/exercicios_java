function num_menor(numeros){
    if(numeros.length > 3 || numeros.length < 3){
        return `Digite três números: ${numeros.length}`;
    }else{
        if(numeros[0] < numeros[1] && numeros[0] < numeros[2]){
            return `O MENOR número é: ${numeros[0]}`;
        }else if(numeros[1] < numeros[2]){
            return `O MENOR número é: ${numeros[1]}`;
        }else{
            return `O MENOR número é: ${numeros[2]}`;
        }
    }
}

module.exports = { num_menor }