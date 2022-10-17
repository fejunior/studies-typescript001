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

  public static criaDe(
    dataString: string,
    quantidadeString: string,
    valorString: string
  ) {
    const exp = /-/g; //Expressão regular que pega todos os - e o g siginificaglobal
    const date = new Date(dataString.replace(exp, ",")); //date constri um data colocando ano, mes, dia;
    const quantidade = parseInt(quantidadeString); //converte para inteiro
    const valor = parseFloat(valorString); //converte para float

    return new Negociacao(date, quantidade, valor);
  }
}
