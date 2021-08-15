let input_pessoa = document.querySelector(".input_pessoa")
let btn_cadastro = document.querySelector(".btn_cadastro") 
let lista_pessoas = document.querySelector(".lista_pessoas")
let btn_sorteio = document.querySelector(".btn_sorteio")



//--------- ADICIONANDO PESSOAS NA LISTA------------
function criaLi(params) {
  let li = document.createElement('li')
  return li
}

function criaCadastro(textoInput) {
  let li = criaLi()
  li.innerText = textoInput
  lista_pessoas.appendChild(li)
  limpaInput()
  criaBotaoApagar(li)

}


btn_cadastro.addEventListener('click', function () {
  if (!input_pessoa.value) return
  criaCadastro(input_pessoa.value)
  
})



//--------- CRIAR BOTÃO DE REMOÇÃO DE ITEM DA LISTA
function criaBotaoApagar(li) {
  li.innerText +- ''
  let botaoApagar = document.createElement('button')
  botaoApagar.innerText = 'Apagar'
  botaoApagar.setAttribute('class', 'apagar')
  botaoApagar.setAttribute('title', 'Apagar esse cadastro')
  li.appendChild(botaoApagar)
}



//--------- CHECA O ITEM DA LISTA QUE FOI CLICADO E REMOVE

document.addEventListener('click', function (e) {
  let el = e.target

  if (el.classList.contains('apagar')) {
    el.parentElement.remove()
   
  }
})


//--------- LIMPAR INPUT

function limpaInput() {
  input_pessoa.value = ''
  input_pessoa.focus()
}



///////////------------ sorteio

function sortear() {
  let pessoas = lista_pessoas.querySelectorAll('li')
  let pessoas_ok = []


  for (let pessoa of pessoas) {
      let lista = pessoa.innerText
      lista = lista.replace('Apagar', '').trim()
      pessoas_ok.push(lista)
      console.log(pessoas_ok)

}
  let np = pessoas_ok.length
  let ns = Math.floor(Math.random() * np)

  document.getElementById("p").innerHTML = pessoas_ok[ns]
}
