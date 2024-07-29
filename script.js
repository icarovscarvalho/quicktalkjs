const main = document.getElementById("main")
const modal = document.getElementById("modal-container");
const alertDiv = document.getElementById("alert");
const commentsArea = document.getElementById("comments-area");
const boxContainer = document.getElementById("box-comments");
const messageValue = document.getElementById("messageValue");
const emailValue = document.getElementById("emailValue");

function activeModal() {
    clearDatas()
    modal.style.display = "flex"
    clearDatas()
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

function createComment() {
    const messageReturn = dataArr[0].comment
    const emailReturn = dataArr[0].email
    const likeReturn = dataArr[0].like
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

        const span = document.createElement("span")
        span.innerHTML = '<ion-icon name="heart-outline"></ion-icon>'
        div.appendChild(span)

        const email = document.createElement("p")
        email.innerText = emailReturn
        div.appendChild(email)
    } else {
        alert('Você precisa Preencher os Campos de Mensagem e Email corretamente')
        return
    } 
}