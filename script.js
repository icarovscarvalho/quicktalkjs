const main = document.getElementById("main")
const modal = document.getElementById("modal-container");
const alertDiv = document.getElementById("alert");
const commentsArea = document.getElementById("comments-area");
const boxComments = document.getElementById("box-comments");
const commentBtn = document.getElementById("comment-btn")
const messageValue = document.getElementById("messageValue");
const emailValue = document.getElementById("emailValue");


let dataArr = []
let usersDatas = []

function saveUserDatas() {
    return {
        comment:userMessage(),
        email:userEmail(),
        isLike:false
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
    commentBtn.style.display = 'flex'
    alertDiv.style.display = 'none'

    closeModal()
    setComment()
}

function userMessage() {
    return messageValue.value
}

function userEmail() {
    return emailValue.value
}

function isLike(e) {
    const arrPos = usersDatas.length-1
    const newComment = usersDatas[arrPos]

    if (newComment.isLike == false) {
        newComment.isLike = true
        e.innerHTML = '<ion-icon name="heart"></ion-icon>'
    } else {
        newComment.isLike = false
        e.innerHTML = '<ion-icon name="heart-outline"></ion-icon>'
    }
}

function createObjComment() {
    return {
        message: userMessage(),
        mail: userEmail(),
        isLike:false
    }
}

function createElements() {
    console.log("criando Element")
    for(i in usersDatas) {
        const divContainer = document.createElement("div")
        divContainer.classList.add("if-comments")
        boxComments.appendChild(divContainer)

        const message = document.createElement('p')
        message.innerText = usersDatas[i].message
        divContainer.appendChild(message)

        const div = document.createElement("div")
        div.classList.add("like-email")
        divContainer.appendChild(div)

        const likeBtn = document.createElement('button')
        likeBtn.innerHTML = '<ion-icon name="heart-outline"></ion-icon>'
        likeBtn.setAttribute('onClick', 'isLike(this)')
        div.appendChild(likeBtn)

        const likeNum = document.createElement('p')
        likeNum.innerText = 0
        div.appendChild(likeNum)

        const email = document.createElement("p")
        email.innerText = usersDatas[i].mail
        div.appendChild(email)
    }
}

function removeComments() {
    const divRemove = document.querySelectorAll('.if-comments')
    divRemove.forEach(element => element.remove());
}

function setComment() {
    usersDatas.push(createObjComment())
    main.classList.remove('no-comments')
    if(usersDatas.length>0){
        removeComments()
        createElements()
    }
}