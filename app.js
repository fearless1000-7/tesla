let body = document.body
let def = {
    color: 'black',
    price: 89990,
    range: 750,
    speed: 60,
    temp: 20,
    wheels: 19,
    ac: false,
    long_range: false,
    view: "car" 
}
let ranging = 30,
    speeder = 5,
    temper = 1,
    disk = 0.5,
    disk_price = 50,
    long_range = 104990,
    rangs = 1000

    const toggle = document.getElementById('toggle')
const toggle1 = document.getElementById('toggle1')
const toggle2 = document.getElementById('toggle2')

let car = {
    range: 750,
    price: 89990,
    speed: 60,
    temperature: 20,
    saka: 19,
    
}

let btn = document.querySelectorAll('.btnAll')
let lasted = 0;
for (let item of btn){
    item.onclick = () =>{
        if(car[speed] === lasted ){
            item.setAttribute('disabled', true)
        }else{
            item.setAttribute('disabled', false)
        }        
    }
    break
}

const RELOAD_CONFIGURATION = () => {
    for (let item in car) {
        document.querySelector(`#${item}`).innerText = car[item]
    }
}


let setup = (key, type, count, plus) => {
    if (type == "procent") {
        if (plus) car[key] = Math.round((car[key] / 100 * count) + car[key])
        else car[key] = Math.round(car[key] - (car[key] / 100 * count))
    } else if (type == "fix") {
        if (plus) car[key] += count
        else car[key] -= count


    }

    RELOAD_CONFIGURATION()
}


let clicks = document.querySelectorAll('*[data-key]')

for (let item of clicks) {
    item.onclick = () => {
   
        
        for (let elem of item.getAttribute('data-key').split('-')) {
            let idx = item.getAttribute('data-key').split('-').indexOf(elem)
            console.log(idx);
            let key = elem
            let type = item.getAttribute('data-type').split('-')[idx]
            let count = item.getAttribute('data-count').split('-')[idx]
            let plus = item.getAttribute('data-plus').split('-')[idx]

            setup(key, type, +count, plus.includes("t"))
        }
    }
}




toggle.onclick = () => {
    toggle.classList.toggle('active')
    if(toggle.classList.contains('active')){

        price.innerText = def.price = long_range
        range.innerText = def.range = rangs
    }  else{
        price.innerHTML = '89990'
        range.innerHTML = '750'
    } console.log(toggle);
}
toggle1.onclick = () =>{
    toggle1.classList.toggle('active')
    if(toggle1.classList.contains('active')){
        range.innerText = "650"
    }else{
        range.innerText = "750"
    }
}
toggle2.onclick = () =>{
    toggle2.classList.toggle('active')
}

