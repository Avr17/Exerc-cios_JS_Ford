// Desenvolva um programa que recebe do usuário, o placar de um jogo de futebol (os gols de cada time) e informa se o resultado foi um empate, se a vitória foi do primeiro time ou do segundo time.


//entrada de dados
// = informar os dois times de futebol
// = informar o placar do jogo


//processamento
// = realizar a validação através das estruturas condicionais
// = verificar se os times ganharam, perderam ou empataram

//saida
// = informar o resultado do jogo de futebol

//Função para determinar o resultado do jogo

    function resultadoJogo (golsArgentinaTime1, golsBrasilTime2) {
        if (golsArgentinaTime1 == golsBrasilTime2) {
            return "O jogo terminou em empate.";

        } else if (golsArgentinaTime1 > golsBrasilTime2) {
            return "O  time Argentina venceu!";

        }else {
            return "O time Brasil venceu!";
        }
    }


    // Exemplo de uso função 
    var golsArgentinaTime1 = prompt ("Digite o numero de gols do Brasil: ");
    var golsBrasilTime2 = prompt ("Digite o numero do Brasil:");

    alert(resultadoJogo(golsArgentinaTime1, golsBrasilTime2));