const emailEdit = document.querySelector('#getEmailEdit')
const btnEdit = document.querySelector('#btnEdit')

btnEdit.addEventListener('click', function(){
  emailEdit.disabled = false
  emailEdit.focus()
  emailEdit.style.color = 'black'
})

emailEdit.addEventListener('input', function(){
  btnEdit.textContent = 'Enviar'
})

function disabledEmail(){
  emailEdit.disabled = true
}

disabledEmail()