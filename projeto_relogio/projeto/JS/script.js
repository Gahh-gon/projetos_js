
function atualizaTempo(){


    var display = document.querySelector('.display');
    var corpo = document.querySelector('.corpo');


corpo.col


    var agora = new Date();
    var horario = colocarZero(agora.getHours()) + ":" + colocarZero(agora.getMinutes()) + ":" + colocarZero(agora.getSeconds());
    
    
    display.textContent = horario;

    if(agora.getHours >=17){


backgroudColor = "red";



    }



}
function colocarZero(numero){

    if(numero < 10){

        numero = "0" + numero;
        





    }

return numero;


}


setInterval(atualizaTempo, 1000);
console.log(horario);
