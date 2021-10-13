const form = document.getElementById('form');
const sname = document.getElementById('sname');
const fname = document.getElementById('fname');
const email = document.getElementById('email');
const message = document.getElementById('message');
const errorElement = document.getElementById('formError');

const modal = document.getElementById('modalContainer');
const button = document.getElementById('close');
const send = document.getElementById('send');

var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; // To check valid email

form.addEventListener('submit', (e) => {
    var messages = []
    if (sname.value === '' || sname.value == null) {
      messages.push('Enter Surname');
    }
    if (fname.value === '' || fname.value == null) {
        messages.push('Enter Name');
    }
    if (isNaN(number.value) == true) {
        messages.push('Enter Number');    
    }
    if (email.value === '' || email.value == null || email.value.includes('@') == false) {
        messages.push('Enter Email')
    } 
    if (message.value === '' || message.value == null) {
        messages.push('Enter Message');
    }    
    if (messages.length > 0) {
      e.preventDefault()
      errorElement.innerText = messages.join(', ')
    }
    if (messages.length == 0) {
        modal.style.display = "flex";
        e.preventDefault()
    }
    console.log(sname.value);
    console.log(fname.value);
    console.log(email.value);
    console.log(message.value);
  })



button.onclick = function(e) {
    modal.style.display = "none";
}
window.onclick = function(e) {
    if (e.target == modal) {
    modal.style.display = "none";
}
}

  

    

/*
function isEmail(email.value) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.value);
}
*/
