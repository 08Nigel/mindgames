const timer = document.getElementById("timer")
const btn = document.getElementById("btn")
const msg = document.getElementById("msg")
let points = document.getElementById("points")


let randomNumbers = Math.floor(Math.random() * 100) 
msg.textContent = randomNumbers

let count = 0
let is_Running = false
    let a = setInterval(() => {
        count++
        timer.textContent = count
    }, 100)

function runGame(){
    startGame()
    is_Running = true
}

btn.addEventListener("click", (startGame) => {
    if (count === randomNumbers){
        alert("You won")
        let increasemoney = parseInt(points.textContent || 0) +1
        points.textContent = increasemoney
    } else {
        alert("you lost")
    }
    if (count === 200){
        clearInterval(a)
    }
    clearInterval(a)
    runGame()
})
document.getElementById("refresh").addEventListener("click", () => {
    clearInterval(a)
    count = 0
    timer.textContent = count
    randomNumbers = Math.floor(Math.random() * 100)
    msg.textContent = randomNumbers
    a = setInterval(() => {
        count++
        timer.textContent = count
    }, 100)


})

document.getElementById("menu").addEventListener('click', () => {
    window.location.href = 'index.html'
})

