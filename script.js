const main = document.getElementById("main")
const modal = document.getElementById("modal-container");
const alertDiv = document.getElementById("alert");
const commentsArea = document.getElementById("comments-area");
const boxContainer = document.getElementById("box-comments");
const messageValue = document.getElementById("messageValue");
const emailValue = document.getElementById("emailValue");

let dataArr = []

function saveUserDatas() {
    return {
        comment:userMessage(),
        email:userEmail(),
        like:0
    }
}

function activeModal() {
    clearDatas()
    modal.style.display = "flex"
}

function closeModal() {
    modal.style.display = "none"
}

function clearDatas() {
    messageValue.value = ''
    emailValue.value = ''
}

function sendComment() {
    commentsArea.style.display ='flex'
    alertDiv.style.display = 'none'

    closeModal()
    dataArr.push(saveUserDatas())
    createComment()
    console.log(...dataArr)
}

function userMessage() {
    return messageValue.value
}

function userEmail() {
    return emailValue.value
}

let handleLike = false

function isLike(e) {
    let userReturn = userEmail()
    
    if (handleLike == false) {
        handleLike = true
        e.innerHTML = '<ion-icon name="heart"></ion-icon>'
    } else {
        handleLike = false
        e.innerHTML = '<ion-icon name="heart-outline"></ion-icon>'
    }
}

function whatLength() {
    return dataArr.length
}

function createComment() {
    const messageReturn = dataArr[whatLength()].comment
    const emailReturn = dataArr[whatLength()].email
    const likeReturn = dataArr[whatLength()].like
    main.classList.remove('no-comments')

    if(messageReturn.length > 0 && emailReturn.length > 0) {
        const divContainer = document.createElement("div")
        divContainer.classList.add("if-comments")
        boxContainer.appendChild(divContainer)

        const message = document.createElement('p')
        message.innerText = messageReturn
        divContainer.appendChild(message)

        const div = document.createElement("div")
        div.classList.add("like-email")
        divContainer.appendChild(div)

        const likeBtn = document.createElement('button')
        likeBtn.innerHTML = '<ion-icon name="heart-outline"></ion-icon>'
        likeBtn.setAttribute('onClick', 'isLike(this)')
        div.appendChild(likeBtn)

        const likeNum = document.createElement('p')
        likeNum.innerText = likeReturn
        div.appendChild(likeNum)

        const email = document.createElement("p")
        email.innerText = emailReturn
        div.appendChild(email)
    } else {
        alert('Você precisa Preencher os Campos de Mensagem e Email corretamente')
        return
    } 
}