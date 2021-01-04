var welcome = document.querySelector('#welcome')
var userName = document.querySelector('#name')

function heading(input){
    var inputName = userName.vlaue
    var message = "Welcome {inputName}! Let's see what your big days got ! "
    welcome.innerHTML = message; 
}

userName.addEventListener("name", heading)
