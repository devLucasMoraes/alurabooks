async function buscarEnderco(){
    const consultaCep = await fetch('https://viacep.com.br/ws/44089150/json/');
    const consultaCepJSON = await consultaCep.json();
    console.log(consultaCepJSON);
}

buscarEnderco()
    
