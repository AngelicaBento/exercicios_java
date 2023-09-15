function maior_num(numeros){
    if(numeros.length > 2 || numeros.length < 2){
        return `Digite dois números: ${numeros.length}`;
    }else{
        if(numeros[0] > numeros[1]){
            return `O MAIOR número é: ${numeros[0]}`;
        }else{
            return `O MAIOR número é: ${numeros[1]}`;
        }
    }
}

module.exports = { maior_num }