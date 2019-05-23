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
            perfil.setAttribute('class','maravilhosas__perfil')

            const foto = document.createElement('img');
            foto.setAttribute('class', 'img-responsive');

            if(personalidade.metadata && personalidade.metadata.image){

                foto.src = personalidade.metadata.image.url;
                
            }else{

                // foto.setAttribute('src','./img/img-mulher.png');
                foto.src = ('./img/img-mulher.png');

        
            }
                
            siteBox.appendChild(perfil);
            perfil.appendChild(link);        
            link.appendChild(foto);
            link.appendChild(nome);

    console.log('sucesso');      
    
});

})
.catch((erro)=>{

   console.log(erro);

})

const button = document.getElementById('send_form')

button.addEventListener('click', (evento) => {
    console.log("oi")
    evento.preventDefault();

    const nomeForm = document.getElementByName('nome').value;

    let urlForm = document.getElementByName('imagem').value;
    

    fetch('http://localhost:5001/maravilhosas',{
        method: "POST",
        headers:{
            'Accept': 'application/json', 'Conten-Type': 'application/json'
        },
        body: JSON.stringify({
            'title': nomeForm,
            'metadata.image': urlForm,
        })
    })

    .then((response)=>{

        return response.json();

    })

    .then((data)=>{

        console.log(data);
        document.getElementById('message').textContent = ('Sucesso !! ')
        
    })
    .catch((erro)=>{

        console.log(erro)
    })


})

