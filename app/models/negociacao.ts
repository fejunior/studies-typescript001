export class Negociacao {
  private Data: Date;
  private Valor: number;

  constructor(data: Date, public readonly quantidade: number, valor: number) {
    this.Data = data;
    this.Valor = valor;
  }

  get data(): Date {
    //Progrmaação defensiva: Garante que o metoso set não seja utilizado para alteração do valor
    const dataNew = new Date(this.Data.getTime());
    return dataNew;
  }

  get valor() {
    return this.Valor;
  }
}
