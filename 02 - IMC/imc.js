const calcular = document.getElementById('calcular')

function imc() {
  let nome = document.getElementById('nome').value
  let altura = document.getElementById('altura').value
  let peso = document.getElementById('peso').value
  let resultado = document.getElementById('resultado')
   
  
  if (peso != '' && altura != '' && nome != '') {
    let valorIMC = (peso / (altura * altura)).toFixed(1)
    let total = Number(valorIMC)
    let classificacao = ''
    if (total < 18.5) {
      classificacao = 'abaixo do peso.'
    } else if (total < 24.9) {
      classificacao = 'com peso normal.'
    } else if (total < 29.9) {
      classificacao = 'com sobrepeso.'
    } else if (total < 34.9) {
      classificacao = 'em Obesidade grau 1.'
    } else if (total < 39.9) {
      classificacao = 'em Obesidade grau 2.'
    } else if (total < 40) {
      classificacao = 'em Obesidade grau 3.'
    }
    
  
    resultado.textContent = `Seu IMC é de ${total}. E está ${classificacao}`
  } else {
    resultado.textContent = `POR FAVOR, PREENCHA TODOS OS CAMPOS ACIMA!`
  }
  

  
}

