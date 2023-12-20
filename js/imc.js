function calcula(){
    var peso = Number(document.getElementById("peso").value)
    var altura = Number(document.getElementById("altura").value)
    
    var imc = peso / (altura^2)
       
    if (imc < 18.5){
        resposta.innerHTML=` ${imc.toFixed(2)} `
        msg.innerHTML=`Você esta abaixo do peso`
    }
    else if (imc < 25){
        resposta.innerHTML=` ${imc.toFixed(2)} `
        msg.innerHTML=`Você esta no seu peso ideal`
    }
    else if (imc < 29.9){
        resposta.innerHTML=` ${imc.toFixed(2)} `
        msg.innerHTML=`Levemente acima do peso`
    }
    else if(imc < 34.9){
        resposta.innerHTML=` ${imc.toFixed(2)} `
        msg.innerHTML=`Obesidade`
    }
    else if(imc < 39.9){
        resposta.innerHTML=` ${imc.toFixed(2)} `
        msg.innerHTML=`Obesidade severa`
    }
    else{
        resposta.innerHTML=` ${imc.toFixed(2)} `
        msg.innerHTML=`Obesidade morbida`
    }
    }


