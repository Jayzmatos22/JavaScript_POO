// Classe genérica que representa um herói
class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;

    // Estrutura de decisão
    switch (this.tipo) {
      case "mago":
        ataque = "magia";
        break;
      case "guerreiro":
        ataque = "espada";
        break;
      case "monge":
        ataque = "artes marciais";
        break;
      case "ninja":
        ataque = "shuriken";
        break;
      default:
        ataque = "um ataque desconhecido";
    }

    // Saída final
    console.log(`o ${this.tipo} atacou usando ${ataque}`);
  }
}

// Exemplos de uso
const heroi1 = new Heroi("Merlin", 150, "mago");
const heroi2 = new Heroi("Arthur", 35, "guerreiro");
const heroi3 = new Heroi("Lee", 40, "monge");
const heroi4 = new Heroi("Hanzo", 28, "ninja");

// Chamando o método atacar
heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();
