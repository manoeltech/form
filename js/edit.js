const emaiilEdit = document.querySelector('#getEmailEdit')
const btnEdit = document.querySelector('#btnEdit')

btnEdit.addEventListener('click', function(){
  emaiilEdit.disabled = false
  emaiilEdit.style.color = 'black'
  btnEdit.textContent = 'Enviar'
})