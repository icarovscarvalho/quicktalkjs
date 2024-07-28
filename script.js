const modal = document.getElementById("modal-container");
const alertDiv = document.getElementById("alert");
const commentsArea = document.getElementById("comments-area");
const boxContainer = document.getElementById("box-comments")
const ifComments = document.getElementsByClassName("if-comments")[0]

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

function createComment() {
    const divContainer = document.createElement("div")
    divContainer.classList.add("if-comments")
    boxContainer.appendChild(divContainer)

    const message = document.createElement('p')
    message.innerText = 'Uma bela mesnagem vai vir aqui'
    divContainer.appendChild(message)

    const div = document.createElement("div")
    div.classList.add("like-email")
    divContainer.appendChild(div)

    const span = document.createElement("span")
    span.innerHTML = '<ion-icon name="heart-outline"></ion-icon>'
    div.appendChild(span)

    const email = document.createElement("p")
    email.innerText = "seuemail@email.com"
    div.appendChild(email)

}