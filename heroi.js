class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;   // Armazena o nome do herói
      this.idade = idade; // Armazena a idade do herói
      this.tipo = tipo;   // Armazena o tipo do herói (guerreiro, mago, etc)
    }
  
    atacar() {
        const ataques = {
          mago: 'usou magia',
          guerreiro: 'usou espada',
          monge: 'usou artes marciais',
          ninja: 'usou shuriken'
        };
      
        const ataque = ataques[this.tipo] || 'realizou um ataque desconhecido';
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
      }
      
  }
  
  // Criando heróis
  const heroi1 = new Heroi('Aragorn', 87, 'guerreiro');
  const heroi2 = new Heroi('Gandalf', 2019, 'mago');
  const heroi3 = new Heroi('Bruce', 30, 'monge');
  const heroi4 = new Heroi('Naruto', 17, 'ninja');
  
  // Chamando o método atacar
  heroi1.atacar(); // O guerreiro atacou usando espada
  heroi2.atacar(); // O mago atacou usando magia
  heroi3.atacar(); // O monge atacou usando artes marciais
  heroi4.atacar(); // O ninja atacou usando shuriken
  