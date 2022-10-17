export class Negociacao {
    constructor(data, quantidade, valor) {
        this.quantidade = quantidade;
        this.Data = data;
        this.Valor = valor;
    }
    get data() {
        const dataNew = new Date(this.Data.getTime());
        return dataNew;
    }
    get valor() {
        return this.Valor;
    }
    static criaDe(dataString, quantidadeString, valorString) {
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ","));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }
}
