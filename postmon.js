'use strict'

const preenchendoFormulario = (getAdress) => {

    document.getElementById('endereco').value = getAdress.logradouro;
    document.getElementById('bairro').value =   getAdress.bairro;
    document.getElementById('cidade').value =   getAdress.cidade;
    document.getElementById('estado').value =   getAdress.estado;

}

const dadosCep = async () => {
    const cep = document.getElementById('cep').value;
    const url =  `https://api.postmon.com.br/v1/cep/${cep}`;
    const dados = await fetch(url);
    const getAdress = await dados.json();
    preenchendoFormulario(getAdress)

}

document.getElementById('cep').addEventListener('focusout',dadosCep)