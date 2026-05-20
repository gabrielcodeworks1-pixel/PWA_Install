import Pessoa from "./Pessoa.js";

class Aluno extends Pessoa {
    #rm = 0;
    constructor(nome, idade, rm){
        super(nome, idade);
        this.#rm = rm;
    }
    get rm() {
        return this.#rm;
    }
    set rm(valor){
        this.#rm = valor;
    }
}
export default Aluno;