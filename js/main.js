const consultaCep = fetch('https://viacep.com.br/ws/45089150/json/')
    .then(response => response.json())
    .then(json => {
        if(json.erro) {
            throw Error('Esse cep não existe!')
        } else {
            console.log(json)
        }
    })
    .catch(error => console.log(error));

console.log(consultaCep)