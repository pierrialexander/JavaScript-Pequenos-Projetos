const init = () => {
  const inputEmail = document.querySelector('input[type="email"]')
  const inputPassword = document.querySelector('input[type="password"]')  
  const submitButton = document.querySelector('.login__submit')

  //validamos se o botão existe e se não term nenhum evento default

  if (submitButton) {
    submitButton.addEventListener('click', (event) => {
      event.preventDefault()

      fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "email": inputEmail.value,
          "password": inputPassword.value
        })
      }).then((response) => {c
          return response.json()
        })
        .then((data) => {
          console.log(data)
        })
      })
    }
  }


window.onload = init;


// LOGIN E SENHA A SER USADO
//eve.holt@reqres.in
//cityslicka