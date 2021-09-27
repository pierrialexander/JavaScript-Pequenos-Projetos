class Validator {
  constructor(){
    this.validations = [
      'data-min-length',
      'data-max-length',
      'data-only-letters',
      'data-email-validate',
      'data-required',
      'data-equal',
      'data-password-validate',
    ]
  }

  // iniciar a validação de todos os campos
  validate(form) {

    //pegar os inputs do form
    let inputs = form.getElementsByTagName('input')

    // transforma HTMLCollection -> array
    let inputsArray = [...inputs]
    
    // loop nos inputs e validação mediante ao que foi encontrado
    inputsArray.forEach(function(input) {
      // loop em todas as validações existentes
      for (let i = 0; this.validations.length > i; i++) {
        //verifica se a validação atual existe no input
        if(input.getAttribute(this.validations[i]) != null) {
         
          // limpando a string para virar um metodo
          le method = this.validations[i].replace('data-', '').replace('-', '')

          // valor do input
          let value = input.getAttribute(this.validations[i])

          // invocar o metodo
          this[method](input, value)
        }
      }

    }, this)
    
  }

  // verifica se um input tem um num min de caracteres
  minlength(input, minValue) {

    let inputLength = input.value.length;

    let errorMessage = `O campo precisa ter pelo menos ${minValue} caracteres`;

    if(inputLength < minValue) {
      this.printMessage(input, errorMessage);
    }

  }

}



// mapear o formulario.
let form = document.getElementById("register-form")
let submit = document.getElementById("btn-submit")

let validator = new Validator()
// evento que dispara as validações

submit.addEventListener('click', function(e) {
  e.preventDefault()
  validator.validate(form)
})
