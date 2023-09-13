//Display para o usuário
console.log(`\nCALCULADORA`)

console.log(`\nInsira dois números`)

console.log(`20`)
console.log(`20`)

console.log(`\nESCOLHA A OPERAÇÃO:`)

console.log(`\n1-Adição 
    2-Subtração
        3-Multiplicação
            4-Divisão
            `)
//
let v1=20
let v2=20
//Objeto
const calculadora = {
nm1: 20,
nm2: 0,
soma: (v1,v2) => { 
    this.nm1 = v1
    this.nm2 = v2

    return (this.nm1 + this.nm2)
},
subtracao : (v1,v2) => {
    this.nm1 = v1
    this.nm2 = v2

    return (this.nm1 - this.nm2)
},
multiplicacao : (v1,v2) => {
    this.nm1 = v1
    this.nm2 = v2

    return (this.nm1 * this.nm2)
},
divisao : (v1,v2) => {
    this.nm1 = v1
    this.nm2 = v2

    if (this.nm2 === 0){
        return false
    }
    else{
        
    return (this.nm1 / this.nm2)
    }
}
}
//

//Estrutura de decisão
let escolha = 1
let resul,operacao
switch(escolha){
    case 1:
        resul = calculadora.soma(v1,v2)
        operacao = "Soma"
        break;
    case 2:
        resul = calculadora.subtracao(v1,v2)
        operacao = "Subtração"
        break;
    case 3:
        resul = calculadora.multiplicacao(v1,v2)
        operacao = "Multiplição"
        break;
    case 4:
        resul = calculadora.divisao(v1,v2)
        operacao = "Divisão"
}
//

//Saída para o usuário
console.log(`A operação selecionada foi ${operacao}\nO resultado da sua operação é ${resul}`)
//
            

