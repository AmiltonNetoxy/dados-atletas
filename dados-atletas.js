class Atleta {
    // Construtor da classe
    constructor(nome, idade, peso, altura, notas) {
      this.nome = nome;
      this.idade = idade;
      this.peso = peso;
      this.altura = altura;
      this.notas = notas;
    }
  
    // Método para calcular a categoria
    calculaCategoria() {
      if (this.idade >= 9 && this.idade <= 11) {
        return "Infantil";
      } else if (this.idade >= 12 && this.idade <= 13) {
        return "Juvenil";
      } else if (this.idade >= 14 && this.idade <= 15) {
        return "Intermediário";
      } else if (this.idade >= 16 && this.idade <= 30) {
        return "Adulto";
      } else {
        return "Sem categoria";
      }
    }
  
    // Método para calcular o IMC
    calculaIMC() {
      return this.peso / (this.altura * this.altura);
    }
  
    // Método para calcular a média válida das notas (desconsiderando a maior e a menor nota)
    calculaMediaValida() {
      // Ordenando as notas
      let notasOrdenadas = this.notas.sort((a, b) => a - b);
      // Eliminando a maior e a menor nota
      let notasValidas = notasOrdenadas.slice(1, 4); 
      // Calculando a média
      let soma = notasValidas.reduce((acc, nota) => acc + nota, 0);
      return soma / notasValidas.length;
    }
  
    // Métodos para obter as informações do atleta
    obtemNomeAtleta() {
      return this.nome;
    }
  
    obtemIdadeAtleta() {
      return this.idade;
    }
  
    obtemPesoAtleta() {
      return this.peso;
    }
  
    obtemNotasAtleta() {
      return this.notas;
    }
  
    obtemCategoria() {
      return this.calculaCategoria();
    }
  
    obtemIMC() {
      return this.calculaIMC();
    }
  
    obtemMediaValida() {
      return this.calculaMediaValida();
    }
  
    // Método para exibir todas as informações do atleta
    exibirInformacoes() {
      console.log(`Nome: ${this.obtemNomeAtleta()}`);
      console.log(`Idade: ${this.obtemIdadeAtleta()}`);
      console.log(`Peso: ${this.obtemPesoAtleta()}`);
      console.log(`Altura: ${this.altura}`);
      console.log(`Notas: ${this.obtemNotasAtleta().join(", ")}`);
      console.log(`Categoria: ${this.obtemCategoria()}`);
      console.log(`IMC: ${this.obtemIMC()}`);
      console.log(`Média válida: ${this.obtemMediaValida()}`);
    }
  }
  
  // Exemplo de uso
  
  const atleta = new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);
  
  // Exibindo as informações do atleta
  atleta.exibirInformacoes();
  