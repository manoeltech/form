const getEmail = document.querySelector('#getEmail')
const btnSubmit = document.querySelector('#btn-submit')
const textResult = document.querySelector('.text-result')

btnSubmit.addEventListener('click', function(){
  let email = getEmail.value
  textResult.innerHTML = `O email ${email} foi cadastrado com sucesso!`
})