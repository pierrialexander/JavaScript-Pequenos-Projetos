const secondsContainer = document.querySelector('#seconds')
const minutesContainer = document.querySelector('#minutes')
const hoursContainer = document.querySelector('#hours')
const daysContainer = document.querySelector('#days')

const nextYear = new Date().getFullYear() + 1
const newYearTime = new Date(`January 01 ${nextYear} 00:00:00`)

const updateCountdown = () => {
const currentTime = new Date() //Atual
const difference = newYearTime - currentTime //calcula os milisegundos que falta para ano novo
const days = Math.floor(difference / 1000 / 60 / 60 / 24) //arredonda em segundos para o ano novo
const hours = Math.floor(difference / 1000 / 60 / 60) % 24 //arredonda em segundos para o ano novo
const minutes = Math.floor(difference / 1000 / 60) % 60//arredonda em segundos para o ano novo
const seconds = Math.floor(difference / 1000) % 60 //arredonda em segundos para o ano novo

secondsContainer.textContent = seconds < 10 ? '0' + seconds : seconds
minutesContainer.textContent = minutes < 10 ? '0' + minutes : minutes
hoursContainer.textContent = hours < 10 ? '0' + hours : hours
daysContainer.textContent = days < 10 ? '0' + days : days


}

// metodo que invoca repetidamente uma função 
setInterval(updateCountdown, 1000);

