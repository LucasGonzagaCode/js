const Car = {
    marca:"Ford",
    cor:"Amarelo",
    ano:2004,
    modelo:"Fiesta",
    km:1500,
    combustivel:"Gasolina",
    velocidade:10,
    acelera : function(){
        return(Car.velocidade+1)
    }
};
let vel = Car.acelera()
console.log(`Acelere o carro ${vel}`)


console.log(`A marca do carro é ${Car.marca}\nSua cor é ${Car.cor}\nO ano do carro é ${Car.ano}\nSeu modelo é ${Car.modelo}\nKilometragem do carro ${Car.km}\nTipo de combustível:${Car.combustivel}`);

const pessoa = {
    primeiroNome: "Lucas",
    sobreNome: "Gonzaga",
    Idade: 18,
    corDcabelo: "Preto",
    nomeCompleto : function(primeiroNome,sobreNome){
        return this.primeiroNome + " " + this.sobreNome;
    }
};
let pname = pessoa.primeiroNome = "Ana"
let psobre = pessoa.sobreNome = "Clara"
console.log(pessoa.nomeCompleto(pname,psobre));


