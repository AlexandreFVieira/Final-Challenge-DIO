class ClasseDoHeroi {
    constructor(type, name, age) {
        this.type = type;
        this.name = name;
        this.age = age;
        this.attack = this.definirAtaque();
    }

    definirAtaque() {
        switch (this.type.toLowerCase()) {
            case 'mago':
                return 'magia';
            case 'guerreiro':
                return 'espada';
            case 'monge':
                return 'artes marciais';
            case 'ninja':
                return 'shuriken';
            default:
                return 'ataque desconhecido';
        }
    }

    atacar() {
        console.log(`O ${this.type} ${this.name} atacou usando ${this.attack}.`);
    }
}

let herois = {
    mago: new ClasseDoHeroi("Mago", "Gandalf", 330),
    guerreiro: new ClasseDoHeroi("Guerreiro", "Gutts", 24),
    monge: new ClasseDoHeroi("Monge", "Dalai-Lama", 98),
    ninja: new ClasseDoHeroi("Ninja", "Naruto", 20),
    arqueiro: new ClasseDoHeroi("Arqueiro", "Legolas", 300)
};

let classeEscolhida = "mago"; // Classe que deseja exibir

if (herois[classeEscolhida]) {
    herois[classeEscolhida].atacar();
} else {
    console.log("Classe não encontrada.");
}
