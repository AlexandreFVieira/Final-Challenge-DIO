// INICIO DE PROGRAMAÇÃO

//Nao esquecer de colocar o console.log
class ClasseDoHeroi {
    constructor (type, attack, name, age){
        this.type = type
        this.attack = attack
        this.name = "Agron"
        this.age = 2200
    }
    atacar(){
            console.log(`O ${this.type} atacou usando ${this.attack}. `)
    }
}

let Mago = new ClasseDoHeroi("Mago","magia" )
let Guerreiro = new ClasseDoHeroi("Guerreiro", "espada")
let Monge = new ClasseDoHeroi("Monge", "artes marciais")
let Ninja = new ClasseDoHeroi("Ninja", "shuriken")
let Arqueiro = new ClasseDoHeroi("Arqueiro", "arco e flecha")

Arqueiro.atacar()

