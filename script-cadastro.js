async function cadastrarMeme() {
    const linkDigitado = document.querySelector('#linkImagem').value 
    const tituloDigitado = document.querySelector('#titulo').value 
    let dadosMeme = {
        linkImagem: linkDigitado,
        dataCadastro: new Date(),
        titulo: tituloDigitado,
        likes: 0 
    }

    const resposta = await fetch ('https://66fc5df8c3a184a84d16e17d.mockapi.io/api/memes', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'
        },
        body: JSON.stringify(dadosMeme)
    })
    alert('Meme cadastrado com sucesso')
   
}