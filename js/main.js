async function buscarEnderco(){
    try {
        const consultaCep = await fetch('https://viacep.com.br/ws/45089150/json/');
        const consultaCepJSON = await consultaCep.json();
        if (consultaCepJSON.erro) {
            throw Error('CEP inexistente!')
        }
        console.log(consultaCepJSON);
    } catch (error) {
        console.log(error)
    }
}

buscarEnderco()
    
