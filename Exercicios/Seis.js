export function evento_duracao(duracao_segundos) {
    return duracao_segundos / 60;

    if(horas > 0){
        minutos = (duracao % 3600) /60;
        segundos = (duracao % 3600) % 60;
        
     }else{
        minutos = duracao / 60;
        segundos = duracao % 60;
     }

}