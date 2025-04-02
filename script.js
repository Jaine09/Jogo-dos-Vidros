function jogar() {
    var rodada = 1;

    while (rodada <= 3) {

        var escolhaJogador = prompt(`Nível ${rodada}, vidro 1,2 ou 3?`);
        
        if(escolhaJogador > 3){
            alert("Escolha somente os números 1,2 ou 3");
            return;
        }

        var pisoQuebrado = Math.floor(Math.random() * 3) + 1;
        console.log(pisoQuebrado);

        if (escolhaJogador == pisoQuebrado) {
            alert("O vidro quebrou, você perdeu!");
            return;
        } else if (rodada == 3) {
            alert("Prabéns, você venceu!!")
        } else {
            alert("Você passou para o próximo nível");
        }

        rodada = rodada + 1;
    }
}