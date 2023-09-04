console.log("Alguma coisa em aspas duplas")
console.log('Alguma coisa em aspas simples')

let variavel =20;
let nome ='Senac';
console.log(nome);
nome =10;

console.log(nome);
console.log(`Alguma coisa em ${variavel}`)

function functionOne(){
    let soma 
    soma = 1+1
    console.log(soma)
}
functionOne()

function functionTwo(){

//Declaração de variáveis

let email, telefone, cpf;

//Inicializar variáveis

email="abcd@abdf.com"
telefone= 12345678910
cpf= "123.456.789-10"

//executando variáveis

console.log("Seu e-mail é:",email);
console.log(`Seu número de telefone é: ${telefone}`);
console.log(`Seu cpf é: ${cpf}`);
}
functionTwo()


//Variável Const
const pi = 3.14159265358979323846
console.log(`Valor de pi é ${pi}`)

const primeiroNome= `Lucas`
const segundoNome= `de Meireles`

console.log(`O primeiro nome é ${primeiroNome}, e o segundo nome é ${segundoNome}`)

//operadores

let num1, num2, resp;
num1=5
num2=10
resp=0
resp=num1+num2
console.log(`A soma é ${resp}`)
resp=num1-num2
console.log(`A subtração é ${resp}`)
resp=num1*num2
console.log(`A multiplicação é ${resp}`)
resp=num1/num2
console.log(`A divisão é ${resp}`)
resp=num1%num2
console.log(`A  resto da divisão é ${resp}`)



//Incremento e Decremento
let z = 5;
let w = 5;

//Incremento
z++;

let y = z;

console.log(`O valor de y: ${y}`)

//Decremento
w--;

let x = w;

console.log(`O valor de y: ${x}`)

//Exponenciação
let expo =5;
let opr = expo ** 2;
let mat = Math.pow(expo,2);
console.log(`A exponenciação é ${opr}`);
console.log(`A exponenciação é ${mat}`);

//Operadores de atribuição

let r = 10;

let s = 10+r;
console.log(`o valor é ${s}`);

let m = 10-r;
console.log(`o valor é ${m}`);

//Operadores relacionais

let p = true;
let q = false;

let v = p || q;

console.log(v);


//Variáveis do tipo ibjeto

const pessoa = {
    nome:"Lucas",
    nome2: "de Meireles"
}
console.log(`O nome da pessoa é ${pessoa.nome}, e seu sobrenome é ${pessoa.nome2}.`);

//Variáveis do tipo array (vetores)

const car = [
    "BMW",
    "Ford",
    "JacMotors"
];
console.log(`o carro escolhido ${car[0]}`)