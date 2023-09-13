let opcao,fruta;

console.log(`Digite uma fruta:`)
console.log(` 1-Banana \n 2-Maça \n 3-Uva \n 4-Sair`)

opcao = 4;

switch(opcao){
    case 1: fruta = `Banana`
    break;
    case 2: fruta = `Maça`
    break;
    case 3: fruta = `Uva`
    break;
    default: fruta = `Sair`
    break;
}
console.log(`Você escolheu ${fruta}`)

