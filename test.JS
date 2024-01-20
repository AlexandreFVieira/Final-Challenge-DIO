class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        switch (this.tipo.toLowerCase()) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'ataque desconhecido';
        }

        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}.`);
    }
}

// Exemplo de uso da classe
let mago = new Heroi('Merlin', 150, 'Mago');
let guerreiro = new Heroi('Arthur', 35, 'Guerreiro');
let monge = new Heroi('Li Shang', 40, 'Monge');
let ninja = new Heroi('Hanzo', 30, 'Ninja');

mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();
