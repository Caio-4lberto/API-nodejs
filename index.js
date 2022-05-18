/*_____________________________________________
               API - Exemplos
_______________________________________________
       https://api.github.com/users/
       https://pokeapi.co/api/v2/pokemon
       https://rickandmortyapi.com/api/character
       https://funtranslations.com/api/
       https://viacep.com.br/ws/01001000/json/
_______________________________________________*/



const axios = require('axios');

async function usersGitHub() {
    const response = await axios.get('https://api.github.com/users/caio-4lberto');
    const data_info = response.data    
    console.log(data_info)
    return data_info
}


usersGitHub();
