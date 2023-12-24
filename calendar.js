let days = document.querySelector(".days")
let hours = document.querySelector(".hours")
let minutes = document.querySelector(".minutes")
let seconds = document.querySelector(".seconds")
const currentYear = new Date().getFullYear()
const NewYearTime = new Date(`January 1 ${currentYear + 1} 00:00:00`)
const updateCountdownTime = function () {
    const currentTime = new Date();
    const diff = NewYearTime - currentTime;
    console.log(diff)
    let d = Math.floor(diff / 1000 / 60 / 60 / 24) - 1
    if (d < 10){
        d = "0" + d
    }
    days.innerHTML = d
    let h = Math.floor(diff / 1000 / 60 / 60) % 24
    if (h < 10){
        h = "0" + h
    }
    hours.innerHTML = h
    let m = Math.floor(diff / 1000 / 60) % 60
    if (m < 10){
        m = "0" + m
    }
    minutes.innerHTML = m
    let s = Math.floor(diff / 1000) % 60
    if (s < 10){
        s = "0" + s
    }
    seconds.innerHTML = s
}
updateCountdownTime()
setInterval(updateCountdownTime, 1000)
// console.log(currentYear, NewYearTime)
