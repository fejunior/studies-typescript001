export class Negociacao {
  private Data: Date;
  private Quantidade: number;
  private Valor: number;

  constructor(data: Date, quantidade: number, valor: number) {
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
