function anoBissexto(ano){
    if((ano % 400 == 0) || (ano % 100 != 0 && ano % 4 == 0)){
        return `O ano ${ano} é BISSEXTO!`
    }else{
        return `O ano ${ano} não é Bissexto!`
    }
}

module.exports = { anoBissexto }