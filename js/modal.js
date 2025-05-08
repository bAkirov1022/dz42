const openModal = document.querySelector('#btn-get')
const modal = document.querySelector('.modal'),
    mclose = document.querySelector('.modal_close'),
    modalDialog = document.querySelector('.modal_dialog')

const open = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
}

openModal.onclick = () => {
    open()
}

const close = () => {
    modal.style.display = 'none'
    document.body.style.overflow = ''
}

mclose.onclick = () => {
    close()
}

const endModal = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 1) {
        open()
        window.removeEventListener('scroll', endModal)
    }
}

window.addEventListener('scroll', endModal)

setTimeout(() => {
    open()
}, 10000)

modal.onclick = (e) => {
    if (e.target === modalDialog || e.target === modal) {
         close()
    }
}
