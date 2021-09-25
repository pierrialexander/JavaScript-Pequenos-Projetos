const express = require('express')
const app = express()

//dizer para o express chamar o ejs como View Engine.
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  var nome = "Pierri Vidmar"
  var lang = "Javascript"
  res.render("index", {
    nome: nome,
    lang: lang,
    empresa: "Guia do Programador", 
    inscritos: 8000
  })
})



app.listen(8082, ()=> {console.log('App Rodando!')})