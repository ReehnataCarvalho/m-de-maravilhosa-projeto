let siteBox = document.querySelector('.maravilhosas__box');

fetch('http://localhost:5001/maravilhosas')

.then((response)=>{
    return response.json();
})

.then((data)=>{

 console.log(data); 

    data.content.forEach(personalidade => {

        const link = document.createElement('a');
        link.setAttribute('href','#');
        
        const nome = document.createElement('p');
        nome.textContent = personalidade.title;

        let perfil= document.createElement('div');
        perfil.setAttribute('class','maravilhosas__perfil');

                
        const botaoDelete = document.createElement('button');
        botaoDelete.textContent = ("deletar");

        
        botaoDelete.addEventListener('click', () => {

            const cardFilho = botaoDelete.parentElement;
            const cardPai = cardFilho.parentElement;

         fetch('http://localhost:5001/maravilhosas' + personalidade.id,{
        
             method: "DELETE",
             headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },             
        })
        .then(()=>{
            cardPai.removeChild(cardFilho)

        })
        .catch((erro)=>{
            console.log(erro)

        })

        })

        const foto = document.createElement('img');
        foto.setAttribute('class', 'img-responsive');

            if(personalidade.metadata && personalidade.metadata.image && personalidade.metadata.image.url != ""){

                foto.src = personalidade.metadata.image.url;
                
            }else{

                foto.src = ('./img/img-mulher.png');
        
            }
            siteBox.appendChild(perfil);
            perfil.appendChild(link);  
            link.appendChild(foto);
            link.appendChild(nome);   
            perfil.appendChild(botaoDelete);       
});

})
.catch((erro)=>{

   console.log(erro);

})

var botaoForm = document.getElementById('send_form')

botaoForm.addEventListener('click', (evento) => {
    evento.preventDefault();

    let nomeForm = document.getElementById('nome').value;
    let urlForm = document.getElementById('imagem').value;
    
    console.log(nomeForm);
    console.log(urlForm);


    fetch('http://localhost:5001/maravilhosas/',{
        method: "POST",
        headers:{
            'Accept': 'application/json', 
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'title': nomeForm,
            'metadata': { 'image': { 'url': 
                urlForm 
            }}
        })
    })

    .then((response)=>{
        return response.json();
    })

    .then((data)=>{

        console.log('sucesso')    
    })
    .catch((erro)=>{

        console.log(erro)
    })

    window.location.reload(true) // nesta linha eu estou dizendo ao navegador que ele recarregue automaticamente quando eu fizer meu post na API


})