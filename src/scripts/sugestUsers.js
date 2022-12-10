//ID dos usuários sugeridos para seguir
const sugestUsers = [3, 7, 6];


function sugestList(){
    for(let i = 1; i < users.length; i++){
        for(let j = 1; j < sugestUsers.length; j++){
          if(users[i].id == sugestUsers[j]){
            console.log('renderiza')

            const secaoSugest = document.querySelector('.aside__container')

            cardIside = document.createElement('li')

            let img = document.createElement('img')
            img.src = users[i].img

            let h2 = document.createElement('h2')
            h2.classList.add = users[i].user
            h2.innerHTML = users[i].user
  
            let p = document.createElement('p')
            p.classList.add = users[i].stack
            p.innerHTML = users[i].stack


            secaoSugest.appendChild(cardIside)
            cardIside.appendChild(img)
            cardIside.appendChild(h2)
            cardIside.appendChild(p)

            let botao = document.createElement('button')
            botao.innerHTML = 'Seguir'



        }   
    }
}

}

sugestList()



