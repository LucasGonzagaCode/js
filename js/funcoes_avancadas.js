//funcoesAvancadas

function meuNome(name){
    return(name)
}
let nome = meuNome("Lucas")
let sobrenome = meuNome("Gonzaga")
console.log(meuNome(`Seu nome é ${meuNome(nome)} e o sobrenome é ${sobrenome}`))

const area = function (base,altura){
    return(base*altura)
}
let resulArea = area(5,6)

console.log(resulArea)

const v = () => {
    console.log(`Olá Lucas`)
}
v()

//
const soma = (num1,num2) => num1+num2
console.log(soma(10,10))
//

const raiz = (q) => { return q * q }
let r = raiz(4)
console.log(r)

let soninho = Math.sin(30)
let quad = Math.sqrt(4)
let aleale = Math.random() * 10
console.log(soninho)
console.log(quad)
console.log(aleale)

