const nextYear = new Date().getFullYear() + 1
const newYearTime = new Date(`January 01 ${nextYear} 00:00:00`)

const updateCountdown = () => {
  const currentTime = new Date() //Atual
  const difference = newYearTime - currentTime //calcula os milisegundos que falta para ano novo
  const days = Math.floor(difference / 1000 / 60 / 60 / 24) //arredonda em segundos para o ano novo
  const hours = Math.floor(difference / 1000 / 60 / 60) % 24 //arredonda em segundos para o ano novo
  const minutes = Math.floor(difference / 1000 / 60) % 60//arredonda em segundos para o ano novo
  const seconds = Math.floor(difference / 1000) % 60 //arredonda em segundos para o ano novo

  console.log(`Faltam ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos, para o ano acabar!`)
}

console.log(updateCountdown())