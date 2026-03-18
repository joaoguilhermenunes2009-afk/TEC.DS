 class Personagem {
    constructor (nome, titulo, hp, mana, energia) {
        this.nome = nome;
        this.titulo = titulo;
        this.hp = hp;
        this.mana = mana;
        this.energia = energia;
    }
    atacar (alvo, habilidade) {

    }
 }
 class habilidade {
    constructor(id, nome, dano, custo, energia) {
        this.id = id;
        this.nome = nome;
        this.dano = dano;
        this.custo = custo;
        this.energia = energia;
    }
 }

 //instanciar (Criar) os objetos
 let hero = new Personagem ("Ragnir", "O Heroi", 100, 100, 0);
 let boss = new Personagem ("Merlin", "Elden Beast", 100, 0, 50);
// Preencher status
document.getElementById("nome-heroi").textContent = `🗡️${hero.nome}`;
document.getElementById("nome-boss").textContent = `🔱${boss.nome}`;
document.getElementById("titulo-heroi").textContent = `${hero.titulo}`;
document.getElementById("titulo-boss").textContent = `${boss.titulo}`;

//abilidade
let container = document.getElementByTd("controles");
let listaHabilidades = [
    new Habilidade(1, "attack", 4, 0, 0),
    new Habilidade(2, "skill", 8, 10, 0),
    new Habilidade(3, "ultimate", 15, 0, 100)
];
listaHabilidades.forEach(hab => {
// areis (olhar nos slaides)
    let btn = document.createElement("button");
    btn.innertext = hab.nome;
    ntn.classList.add("btn", "btn-warning");
    container.appenChild(btn);
});