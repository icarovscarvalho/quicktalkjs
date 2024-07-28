const modal = document.getElementById("modal-container");
const alertDiv = document.getElementById("alert");
const commentsArea = document.getElementById("comments-area");

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
}