function verificar(){
    var idade=document.getElementById("idade").value

    if(idade>=16 && idade<18){
        alert("Seu voto é facultativo")
    }
    else if (idade>=18 && idade<70){
        alert("Seu voto é obrigatório")
    }
    else if(idade>70){
        alert("Seu voto é facultativo de novo!")
    }

}