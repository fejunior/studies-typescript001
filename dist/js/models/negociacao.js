export class Negociacao {
    constructor(data, quantidade, valor) {
        this.Data = data;
        this.Quantidade = quantidade;
        this.Valor = valor;
    }
    get data() {
        return this.Data;
    }
    get quantidade() {
        return this.Quantidade;
    }
    get valor() {
        return this.Valor;
    }
}
