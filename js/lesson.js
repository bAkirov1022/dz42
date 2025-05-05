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