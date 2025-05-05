const gmailInput = document.querySelector('#gmail_input')
const gmailBtn = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExp = /^[a-zA-Z0-9._%+-]+@gmail\.com$/

gmailBtn.addEventListener('click', function(){
    if(regExp.test(gmailInput.value)){
        gmailResult.innerHTML = 'OK'
        gmailResult.style.color = 'green'
    } else{
        gmailResult.innerHTML = 'NOT OK'
        gmailResult.style.color = 'red'
    }
})
//1 задача
const parent = document.querySelector('.parent_block'),
    child = document.querySelector('.child_block')

let X = 0, Y = 0
const width = parent.clientWidth - child.clientWidth
const height = parent.clientHeight - child.clientHeight

const move = () => {
    requestAnimationFrame(move)
    child.style.left = `${X}px`
    child.style.top = `${Y}px`
    if (Y === 0 && X < width) X++ 
    else if (X === width && Y < height) Y++
    else if (Y === height && X > 0) X--
    else if (X === 0 && Y > 0) Y--
}

move()
//2 задача
const display = document.querySelector('#seconds')
const start = document.querySelector('#start')
const stopp = document.querySelector('#stop')
const reset = document.querySelector('#reset')

let count = 0
let timer = null

function update() {
    display.textContent = count
}

start.onclick = function () {
    if (timer !== null) return
    timer = setInterval(() => {
        count++
        update()
    }, 1000)
};

stopp.onclick = function () {
    clearInterval(timer)
    timer = null
};

reset.onclick = function () {
    clearInterval(timer)
    timer = null
    count = 0
    update()
};


  
  
