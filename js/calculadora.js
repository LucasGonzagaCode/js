//Display para o usuário
console.log(`\nCALCULADORA`)

console.log(`\nInsira dois números`)

console.log(`5`)
console.log(`5`)

console.log(`\nESCOLHA A OPERAÇÃO:`)

console.log(`\n1-Adição 
    2-Subtração
        3-Multiplicação
            4-Divisão
            `)

//Funções

//Soma
function Soma(num1,num2){
    return num1+num2
}
Soma(5,5)

//Subtrção
function Sub(num1,num2){
    return num1-num2
}
Sub(5,5)

//Multiolicação
function Mult(num1,num2){
    return num1*num2
}
Mult(5,5)

//Divisão
function Divs(num1,num2){
    return num1/num2
}
Divs(5,5)

//Estrutura de decisão
let escolha = 1
let resul,nmrs,operacao
switch(escolha){
    case 1:
        resul = Soma(5,5)
        nmrs = "5,5"
        operacao = "Adição"
        break;
    case 2:
        resul = Sub(5,5)
        nmrs = "5,5"
        operacao = "Subtração"
        break;
    case 3:
        resul = Mult(5,5)
        nmrs = "5,5"
        operacao = "Multilicação"
        break;
    case 4:
        resul = Divs(5,5)
        nmrs = "5,5"
        operacao = "Divisão"
        break;
    default:
    console.log(`Não houve operação`)
        resul = 0
        nmrs = 0
        operacao = null
}

//Saída para o usuário
console.log(`Os numeros digitados foram ${nmrs} 
A operação escolhida foi ${operacao} 
O resultado da operação é ${resul}`)



