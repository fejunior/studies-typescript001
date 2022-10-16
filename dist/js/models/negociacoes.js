export class Negociacoes {
    constructor() {
        this.Negociacoes = [];
    }
    adiciona(negociacao) {
        this.Negociacoes.push(negociacao);
    }
    lista() {
        return this.Negociacoes;
    }
}
