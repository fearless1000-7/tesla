
let btns = document.querySelectorAll('.dot[data-color]')
// let title = document.querySelector('.title')
let img = document.querySelector('.top-wrap')

let tesla = {
     Milk: "./public/milk.png",
     White: "./public/white.png",
     Black: "./public/black.png"

}
btns.forEach(btn => {
    btn.onclick = () => {
        let key = btn.getAttribute('data-color')

        img.style.backgroundImage =  `url("${tesla[key]}")`


        btns.forEach(elem => elem.classList.remove('active'))
        btn.classList.add('active')
    }})