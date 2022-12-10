function renderListUsers(users, posts){
    const secaoCard = document.querySelector('.list__container')
        for(let i = 0; i < posts.length; i++){
          
           
            let cardLi = document.createElement('li')
            let img = document.createElement('img')
            let h2 = document.createElement('h2')
            let p = document.createElement('p')
            let pTitle = document.createElement('p')
            let pText = document.createElement('p')
            let botao = document.createElement('button')
            let btnImage = document.createElement('button')

            pTitle.innerText = posts[i].title
            pText.innerText = posts[i].text
            cardLi.id = posts[i].id_post       
            
        
            img.src = users[i].img
            h2.classList.add = 'usuarios'
            h2.innerText = users[i].user
            p.classList.add = users[i].stack
            p.innerText = users[i].stack
            botao.innerText =  'Abrir Post'
            botao.addEventListener('click' , () => createModal(users[i],posts[i]))
            btnImage.innerText = 

            cardLi.append(img, h2, p, pTitle, pText, botao )
                    
            secaoCard.appendChild(cardLi)

            }
        }
                
renderListUsers(users, posts)



function createModal(user, post) {

    const section = document.querySelector('.modal__container')
    let cardLi = document.createElement('div')
    let img = document.createElement('img')
    let h2 = document.createElement('h2')
    let p = document.createElement('p')
    let closeBtn = document.createElement('span')
    let h3 = document.createElement('h3')
    let h4 = document.createElement('h4')
    

    cardLi.classList.add = 'modal'
    
    img.src = user.img
    h2.innerText = user.user
    p.classList.add = user.stack
    p.innerText = user.stack
    closeBtn.innerText = 'X'
    h3.innerText = post.title
    h4.innerText = post.text

    closeBtn.innerText = 'X'
    closeBtn.id = 'closeBtn'

    cardLi.append( img, h2, p, closeBtn, h3, h4)
    
    section.appendChild(cardLi)

    closeBtn.addEventListener('click', () =>{
        cardLi.remove()
    })
    return section
}

function closeModal(){
    const modalContainer = document.querySelector('.')
    const closeBtn = document.querySelector('#closeBtn')

    closeBtn.addEventListener('click', () => {
        modalContainer.remove()
    })
}