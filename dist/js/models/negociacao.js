export class Negociacao {
    constructor(data, quantidade, valor) {
        this.quantidade = quantidade;
        this.Data = data;
        this.Valor = valor;
    }
    get data() {
        //Progrmaação defensiva: Garante que o metoso set não seja utilizado para alteração do valor
        const dataNew = new Date(this.Data.getTime());
        return dataNew;
    }
    get valor() {
        return this.Valor;
    }
}
