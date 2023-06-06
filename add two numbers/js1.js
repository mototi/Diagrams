"use strict"

function add(){
    let x = Number(document.getElementById('num1').value)
    let y = Number(document.getElementById('num2').value)


    if ( isNaN(x) || isNaN(y)) {
        alert('Please enter valid numbers')
    }
    else{
        let c = x + y 
        document.getElementById('answer').value = c 
    }

 
}

