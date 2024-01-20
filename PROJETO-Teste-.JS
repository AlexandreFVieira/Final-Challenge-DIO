// INICIO DE PROGRAMAÇÃO

let informacao = {
	name : "Agron",
    age : 2200
}
//Nao esquecer de colocar o console.log
class ClasseDoHeroi {
    constructor (type, attack){
        this.type = type
        this.attack = attack
    }
    escrever(){
            console.log(`O ${this.type} atacou usando ${this.attack}. `)
    }
}

let Mago = new ClasseDoHeroi("Mago","magia" )
let Guerreiro = new ClasseDoHeroi("Guerreiro", "espada")
let Monge = new ClasseDoHeroi("Monge", "artes marciais")
let Ninja = new ClasseDoHeroi("Ninja", "shuriken")
let Arqueiro = new ClasseDoHeroi("Arqueiro", "arco e flecha")

console.log(`O Herói ${informacao.name} possui ${informacao.age} anos de idade.`)
Mago.escrever()

