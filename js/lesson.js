const phoneInput = document.querySelector('#phone_input')
const phoneBtn = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')

const qwe = /\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}/

phoneBtn.onClick = () => {
    if(qwe.test(phoneInput.value)){
        phoneResult.innerHTML = 'ok'
        phoneResult.style.color = 'green'
    } else{
        phoneResult.innerHTML = 'not ok'
        phoneResult.style.color = 'red'
    }
}
//TAB SLIDER
const tabItems = document.querySelectorAll('.tab_content_item'),
    tabContents = document.querySelectorAll('.tab_content_block'),
    tabParenst = document.querySelector('.tab_content_items')
let currentIndex = 0;

const showTab = (index) => {
    tabItems.forEach((item, i) => {
        item.classList.toggle('tab_content_item_active', i === index)
        tabContents[i].style.display = i === index ? 'flex' : 'none'
    })
}
showTab(currentIndex);
const autoSlide = () => {
    currentIndex = (currentIndex + 1) % tabItems.length
    showTab(currentIndex)
}

const slideInterval = setInterval(autoSlide, 5000)
tabItems.forEach((item, index) => {
    item.onclick = () => {
        currentIndex = index  
        showTab(currentIndex)
    }
})

