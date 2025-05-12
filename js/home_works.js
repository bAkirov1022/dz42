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
const display = document.querySelector('#seconds'),
    start = document.querySelector('#start'),
    stopp = document.querySelector('#stop'),
    reset = document.querySelector('#reset')

let count = 0,
    timer = null

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
}

let xhr = new XMLHttpRequest()
xhr.open("GET", "../data/characters.json", true)

xhr.onload = () => {
    if (xhr.status === 200) {
        let data = JSON.parse(xhr.responseText)
        let charactersList = document.querySelector(".characters-list")

        data.forEach((character) => {
            let card = document.createElement("div")
            card.className = "character-card"

            card.innerHTML = `
        <div class="character-photo">
          <img src="${character.image}" alt="${character.name}">
        </div>
        <h3>${character.name}</h3>
        <p><strong>Источник:</strong> ${character.source}</p>
        <p><strong>Возраст:</strong> ${character.estimated_age}</p>
        <p><strong>Тип:</strong> ${character.type}</p>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Подробнее</a>
      `

            charactersList.appendChild(card)
        })
    } else {
        console.error("Ошибка загрузки файла:", xhr.status)
    }
}

xhr.onerror = function () {
    console.error("Произошла ошибка при запросе.")
}

xhr.send()

const request = new XMLHttpRequest()
request.open('GET', '../data/any.json', true)

request.onload = () => {
    if (request.status === 200) {
        const data = JSON.parse(request.responseText)
        console.log('Полученные данные:', data)
    } else {
        console.error('Ошибка при загрузке JSON:', request.status)
    }
}

request.onerror = () => {
    console.error('Ошибка сети')
}

request.send()
  
  
