function idadeMesesDias(idade){
    let meses = idade * 12;
    let dias = idade * 365;
    
    return `A idade em meses é ${meses} e em dias é ${dias}`;
}

module.exports = { idadeMesesDias }