


let siteBox = document.querySelector('.maravilhosas__box');
let perfil= document.querySelector('.maravilhosas__perfil');
// let linkUrl = document.querySelector('a');
// siteBox.appendChild(linkUrl);
siteBox.appendChild(perfil);


fetch('https://theblackwomanhistory.firebaseio.com/.json')
.then((response)=>{

    return response.json();

})

.then((data)=>{

 console.log(data); 

    data.content.forEach(personalidade => {

        if(personalidade.metadata){

            console.log('tem metadata');

            if(personalidade.metadata.image.url){

                const foto = document.querySelector('img');
                foto.src = personalidade.metadata.image.url;
                perfil.appendChild(foto);
                console.log('tem imagem')

            }else{
                const foto = document.querySelector('img');
                foto.src = personalidade.metadata.image.url;  /*colocar a imagem direto uma imagem para todas que nao tem iamgem*/
                perfil.appendChild(foto);
                console.log('minha imagem')   
            }
       
        }



    console.log('sucesso');

    const nome = document.querySelector('p');
    nome.textContent = personalidade.title;
    perfil.appendChild(nome);
    
    
});



})


.catch((erro)=>{

   console.log(erro);

})
