let pass = document.getElementById('pwd')
let con_pass = document.getElementById('con-pwd')
let submit = document.getElementById('submit-button')
let message = document.getElementById('mismatch')

function match () {
  if (pass.value.length > 1 && pass.value != con_pass.value) {
    message.textContent = "Passwords do not match."
    submit.disabled = true
  } else if (pass.value == con_pass.value) {
    message.textContent = ''
    submit.disabled = false
  }
}
