// Atividade Pratica 01
/*const hora = 14;
const saudacao = hora < 12? "Bom dia" : hora < 18? "Boa tarde" : "Boa noite";
console.log(saudacao);
//02
let resultado = 0;
for (let i = 1; i <= 3; i++) {
    resultado += i;
}
console.log(resultado);
//03
const dobrar = n => n * 2;
console.log(dobrar(5) + dobrar(2));
//04
const frutas = ["Maça", "Banana"];
frutas.push("Laranja");
console.log(frutas.length);
//05
const numeros = new Set([1, 2, 2, 3]);
console.log(numeros.size);
//06 - Considere o HTML: <div id= "caixa"> Ola </div>
const elemento = document.getElementById("caixa");
console.log(elemento.textContent);
//07
class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}
const usuario = new Pessoa("Ana");
console.log(typeof usuario);
//08
const carro = { marca: " Toyota", ano: 2024 };
console.log(carro["marca"]);
//09
const numeros = [10,15, 20, 25, 30];
let soma = 0;

for (let i = 0; i < numeros .length; i ++) {
    if (numeros [i] % 2 === 0 && numeros[i] > 15) {
        soma += numeros [i];
    }
}
console.log(soma);
//10
const usuarios = [
    { nome: 'Rui', ativo: true },
    { nome: 'Ana', ativo: false },
    { nome: 'Bia', ativo: true }
];
const resultado = ususarios
    .filter(u => u.ativo)
    .map(u => u.nome);

console.log(resultado);