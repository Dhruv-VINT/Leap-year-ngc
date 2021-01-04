var input = document.querySelector("#input");
var btn = document.querySelector("#check");
var output = document.querySelector("#output");



function clickHandler() {

    var useryear = input.value;
    var answer;
    const Leap ="Greetings!  you were born in a leap year."
    const notLeap ="Whoops! You were not born in a leap year."



 if (useryear % 400 == 0) {
        answer = Leap
    }else if(useryear % 100 == 0){
        answer = notLeap
    } else if(useryear % 4 == 0){
        answer = Leap
    } else {
        answer = notLeap
    }
    output.innerText = answer;
}

btn.addEventListener("click",clickHandler);