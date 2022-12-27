async function buscarEndereco(cep){
    try {

        var mensagemErro = document.getElementById('erro');
        mensagemErro.innerHTML = "";

        const consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const consultaCepJSON = await consultaCep.json();
        if (consultaCepJSON.erro) {
            throw Error('CEP inexistente!')
        }

        const estado = document.getElementById('estado');
        const cidade = document.getElementById('cidade');
        const bairro = document.getElementById('bairro');
        const complemento = document.getElementById('complemento');
        const endereco = document.getElementById('endereco');
        cidade.value = consultaCepJSON.localidade;
        estado.value = consultaCepJSON.uf;
        bairro.value = consultaCepJSON.bairro;
        complemento.value = consultaCepJSON.complemento;
        endereco.value = consultaCepJSON.logradouro;
        console.log(consultaCepJSON);
        return consultaCepJSON;
    } catch (error) {
        mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente!</p>`
        console.log(error)
    }
}

const cep = document.getElementById('cep');
cep.addEventListener('focusout', () => buscarEndereco(cep.value))
    
