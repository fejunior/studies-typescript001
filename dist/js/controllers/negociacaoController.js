import { Negociacao } from "../models/negociacao.js";
export class NegociacaoController {
    constructor() {
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        console.log(negociacao);
        this.limparFormulario();
    }
    criaNegociacao() {
        const exp = /-/g; //Expressão regular que pega todos os - e o g siginificaglobal
        const date = new Date(this.inputData.value.replace(exp, ",")); //date constri um data colocando ano, mes, dia;
        const quantidade = parseInt(this.inputQuantidade.value); //converte para inteiro
        const valor = parseFloat(this.inputValor.value); //converte para float
        return new Negociacao(date, quantidade, valor);
    }
    limparFormulario() {
        this.inputData.value = "";
        this.inputQuantidade.value = "";
        this.inputValor.value = "";
        this.inputData.focus();
    }
}
