let button = document.getElementById('button')

button.addEventListener('click', (event) => {
  event.preventDefault()
  var done = 0;
  let email = document.getElementById('email')
 
  let password = document.getElementById('senha')
  
  
  
  if (email.value == '') {
    email.classList.add('errorInput')
  } else {
    email.classList.remove('errorInput')
  }

  if (password.value == '') {
    password.classList.add('errorInput')  
  } else {
    password.classList.remove('errorInput')  
  }

  if (email.value.indexOf("@") == -1 || email.value.indexof(".") == -1 || (email.value.indexof(".") - email.value.indexof("@") == -1)) {
    email.classList.add("errorInput")
  } else {
    email.classList.remove('errorInput')
  }
  
  if (!isNaN(email.value) == true && email.value.lenght == 11) {
    email.classList.remove("errorInput")
  } 

  if (password.value.length <= 5) {
    password.classList.add('errorInput')
  } 


})