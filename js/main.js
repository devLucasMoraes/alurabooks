const consultaCep = fetch('https://viacep.com.br/ws/44089150/json/')
    .then(response => response.json())
    .then(json => console.log(json));

console.log(consultaCep)