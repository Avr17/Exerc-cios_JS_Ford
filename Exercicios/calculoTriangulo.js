// Escreva     um     programa que leia     as     medidas     dos     lados     de     um     triângulo     e    escreva    se    ele    é    Equilátero,    Isósceles    ou  Escaleno. 
// Sendo    que:    
// − Triângulo    Equilátero:    possui    os    3    lados    iguais.
// − Triângulo    Isóscele:    possui    2    lados    iguais.
// − Triângulo    Escaleno:    possui    3    lados    diferentes.


//entrada de dados
// = informar as 3 medidas de um triangulo

//processamento
// = verificar se o triangulo tem os 3 lados igual ou 2 lados iguais ou os 3 lados diferentes
// = para isso temos que utilizar os operadores lógicos && || ! 

//saida de dados
// = informar se o triangulo é equilátero, escaleno ou isócele
// = motrar a saída do programa na console

<Script>
//Programa para identificar o tipo de triángulo 

// Criamos a função para ler as medidas e determinar o tipo de triángulo 

function tipoTriángulo (lado1, lado2,lado3){

    if (lado1 === lado2 && lado2 === lado3) {
                return "Equilátero";
    } else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
                return "Isósceles";
    } else {
                return "Escaleno";
}
}

// Entrada de dados
const lado1 = parseFloat(prompt("Informe a medida do primeiro lado:"));
const lado2 = parseFloat(prompt("Informe a medida do segundo lado:"));
const lado3 = parseFloat(prompt("Informe a medida do terceiro lado:"));

//Saída de dados
 const resultado = tipoTriangulo(lado1, lado2, lado3);
 console.log(O triângulo é ${resultado}.);

 

</Script>