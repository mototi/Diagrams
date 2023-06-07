"use strict"

let obj = [];

let i = -1 ;
function add_task(){

    let text = document.getElementById('tsk-txt').value 
    let per = Number(document.getElementById('per-num').value) 

    if(isNaN(text) && !isNaN(per))
    {
        if (per == null || per <= 0 || per > 3)
        {
            alert("unvalid periority inputs")
            return;
        }

        i++;
        obj[i] = {
            txt : text ,
            p : per
        }

        display(i);
        document.getElementById('tsk-txt').value = ""; 
        document.getElementById('per-num').value = ""; 
        const heads =  document.getElementsByClassName('th-dis');
        heads[0].style.opacity = "100%";
        heads[1].style.opacity = "100%";
        heads[2].style.opacity = "100%";

    }
    else
    {
        alert("unvalid inputs try again")
        return
    }
}

function display(index){
    const body = document.getElementById('tabody');
    body.insertAdjacentHTML("beforebegin",
    `<tr>
        <td>${obj[index].txt}</td>
        <td>${obj[index].p}</td>
        <td class="btb">
            <button id = "rm${index}"
             onclick="this.parentElement.parentElement.style.display = 'none';
             remove_task(${index})">
                remove
            </button>
        </td>
    </tr>`);
   
}

function remove_task(demo){
    obj[demo] = null ;
    let nul = 1 ;
    for (let o = 0 ; o < obj.length ; o++)
    {
        if(obj[o] != null)
        {
            nul = 0 ;
        }
    }
    if(nul == 1)
    {
        const heads =  document.getElementsByClassName('th-dis');
        heads[0].style.opacity = "0%";
        heads[1].style.opacity = "0%";
        heads[2].style.opacity = "0%";
    }
}
