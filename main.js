'use strict'


const showData = (endereco) =>{

        document.getElementById('endereco').value = endereco.logradouro;
        document.getElementById('bairro').value =   endereco.bairro;
        document.getElementById('cidade').value =   endereco.localidade;
        document.getElementById('estado').value =   endereco.uf;


}


const getZipCode = () => {
    const cep = document.getElementById('cep').value;
    const url =   `https://viacep.com.br/ws/${cep}/json/`
    showData(endereco)
    fetch(url).then( response =>  response.json()).then(endereco => showData(endereco))
}


document.getElementById('cep').addEventListener('focusout',getZipCode)


