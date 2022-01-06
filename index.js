let btn1 = document.querySelector('#light')
let btn2 = document.querySelector('#dark')
let btn3 = document.querySelector('#aquamarine')
let btn4 = document.querySelector('#violet')
let body = document.querySelector('body')
let h1 = document.querySelector('h1')
let p = document.querySelectorAll('.p')


btn1.addEventListener('click', () => {
    body.style.backgroundColor = '#f2f2f2'
    // Не обязательно была так паритсья)
    h1.style.color = '#000000'
    p[0].style.color = '#000000'
    p[1].style.color = '#000000'
    p[2].style.color = '#000000'
    p[3].style.color = '#000000'
    
    // всё, что касается шрифтов наследуется в css
    // ты мог просто задать цвет фона и шрифта body:
    // body.style.backgroundColor = '#f2f2f2'
    // body.style.color = '#000'
})

btn2.addEventListener('click', () => {
    body.style.backgroundColor = '#2B2B2B'
    h1.style.color = "#FFFFFF"
    p[0].style.color = '#FFFFFF'
    p[1].style.color = '#FFFFFF'
    p[2].style.color = '#FFFFFF'
    p[3].style.color = '#FFFFFF'
})

btn3.addEventListener('click', () => {
    body.style.backgroundColor = '#7FFFD4'
    h1.style.color = '#2B2B2B'
    p[0].style.color = '#2B2B2B'
    p[1].style.color = '#2B2B2B'
    p[2].style.color = '#2B2B2B'
    p[3].style.color = '#2B2B2B'
})

btn4.addEventListener('click', () => {
    body.style.backgroundColor = '#8000FF'
    h1.style.color = '#FFFF00'
    p[0].style.color = '#FFFF00'
    p[1].style.color = '#FFFF00'
    p[2].style.color = '#FFFF00'
    p[3].style.color = '#FFFF00'
})


//// button styles

let button = document.querySelectorAll('.btn')
    button[0].style.backgroundColor = '#f2f2f2'
    button[1].style.backgroundColor = '#2B2B2B'
    button[2].style.backgroundColor = '#7FFFD4'
    button[3].style.backgroundColor = '#8000FF'

    button[1].style.color = '#FFFFFF'
    button[3].style.color = '#FFFF00'


    button[0].style.fontSize = '20px'
    button[1].style.fontSize = '20px'
    button[2].style.fontSize = '20px'
    button[3].style.fontSize = '20px'


    button[0].style.height = '40px'
    button[0].style.width = '100px'
    button[1].style.height = '40px'
    button[1].style.width = '100px'
    button[2].style.height = '40px'
    button[2].style.width = '120px'
    button[3].style.height = '40px'
    button[3].style.width = '100px'








