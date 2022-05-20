const axios = require('axios');

module.exports = {
    async searchGit(req, res){
        const { name } = req.params;
        var nome, bio, imagem;

        await axios.get('https://api.github.com/users/'+ name).then(function(resposta) {
            console.log(resposta.data);

            nome = resposta.data.name;
            bio = resposta.data.bio;
            imagem = resposta.data.avatar_url;

            return res.send('<html><head></head> <body> <h1>' + nome +'</h1> </body> </html>');
        }).catch((err) => {
            res.json({msg: "Perfil não encontrado!" + err })
        })
    }
}