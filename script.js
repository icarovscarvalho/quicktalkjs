const modal = document.getElementById("modal-container");
const alertDiv = document.getElementById("alert");
const commentsArea = document.getElementById("comments-area");
const boxContainer = document.getElementById("box-comments");
const messageValue = document.getElementById("messageValue");
const emailValue = document.getElementById("emailValue");

function activeModal() {
    modal.style.display = "flex"
}

function closeModal() {
    modal.style.display = "none"
}

function sendComment() {
    commentsArea.style.display ='flex'
    alertDiv.style.display = 'none'
    closeModal()
    createComment()
}

function userMessage() {
    return messageValue.value
}

function userEmail() {
    return emailValue.value
}

function createComment() {
    const divContainer = document.createElement("div")
    divContainer.classList.add("if-comments")
    boxContainer.appendChild(divContainer)

    const message = document.createElement('p')
    message.innerText = userMessage()
    divContainer.appendChild(message)

    const div = document.createElement("div")
    div.classList.add("like-email")
    divContainer.appendChild(div)

    const span = document.createElement("span")
    span.innerHTML = '<ion-icon name="heart-outline"></ion-icon>'
    div.appendChild(span)

    const email = document.createElement("p")
    email.innerText = userEmail()
    div.appendChild(email)
}