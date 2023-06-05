"use strict"

function add(){
    let x = parseInt(document.getElementById('num1').value)
    let y = parseInt(document.getElementById('num2').value)


    if ( isNaN(x) || isNaN(y)) {
        alert('Please enter valid numbers')
    }
    else{
        let c = x + y 
        document.getElementById('answer').value = c 
    }

 
}

