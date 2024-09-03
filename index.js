class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    apresentar() {
        
        for (let i= 0; i< this.nome.length; i++) {
           console.log(`meu nome é ${this.nome[i]} e minha idade é ${this.idade[i]}`);
           
        }
    }
}
    let nome =['Samuel','Carol'];
    let idade=[25,31]
    let Pessoa1=new Pessoa(nome,idade);
    Pessoa1.apresentar();
    
    



