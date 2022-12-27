async function buscarEndereco(cep){
    try {
        const consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const consultaCepJSON = await consultaCep.json();
        if (consultaCepJSON.erro) {
            throw Error('CEP inexistente!')
        }
        console.log(consultaCepJSON);
    } catch (error) {
        console.log(error)
    }
}

const ceps = ['44089150', '44089278', '44002384']
const enderecos = ceps.map(cep => buscarEndereco(cep));
Promise.all(enderecos).then(response => console.log(response))
    
