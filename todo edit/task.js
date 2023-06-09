
let arr = [];

let tableb = document.getElementById('tabody');
let tr = document.createElement('tr');
let td = document.createElement('td');
let bt = document.createElement('button');
let ed_bt = document.createElement('button');


//giving the insiated buttons all the attrebutes that it needs
bt.innerText = "Remove";
ed_bt.innerText = "Edit";

ed_bt.style.backgroundColor = "rgba(0, 128, 0, .5)"
bt.style.backgroundColor = "rgba(255, 0, 0, .5)"


const heads =  document.getElementsByClassName('th-dis');

function add_task(){
    let txt = document.getElementById('tsk-txt').value;
    let p = Number(document.getElementById('per-num').value); 

    if(isNaN(txt) && !isNaN(p))
    {
        if(p > 3 || p <= 0)
        {
            alert('periority out of range only from (1 to 3)');
            return;
        }

        arr.push([txt,p]);
    
        drawtable();

        document.getElementById('tsk-txt').value = ""; 
        document.getElementById('per-num').value = ""; 

    }
    else{
        alert('non valid input type try again')
        return;
    }

}

function drawtable(){
    //erase the table each time user adds task
    tableb.innerHTML = "";
    //display the table from the updated version af arr
    //outer loop displays the intier rows 
    //iner loop displays cells in rows
    for (let r = 0 ; r < arr.length ; r++)
    {
        let tr_ = tr.cloneNode(false);
        tr_.setAttribute("id",`ROW${r}`) ;
        for ( let e = 0 ; e < arr[r].length; e++)
        {
            let td_ = td.cloneNode(false);
            let cell = arr[r][e];

            td_.appendChild(document.createTextNode(cell));
            tr_.appendChild(td_);
        }
        //add "remove" and "edit" button at the end of each row
        let bt_ = bt.cloneNode(true);
        let ed_bt_ = ed_bt.cloneNode(true);
        
        bt_.setAttribute("onclick",`remove_row(${r})`) ;
        ed_bt_.setAttribute("onclick",`edit_row(${r})`) ;
        tr_.appendChild(bt_);
        tr_.appendChild(ed_bt_);
        //add each row to the table 
        tableb.appendChild(tr_);
    }
    dis_heads();
}

function remove_row(demo){
    arr.splice(demo,1);  
    drawtable();
    dis_heads();
}

function dis_heads(){
    if(arr.length == 0 ){
        heads[0].style.opacity = "0";
        heads[1].style.opacity = "0";
        heads[2].style.opacity = "0";
    }
    else{
        heads[0].style.opacity = "100%";
        heads[1].style.opacity = "100%";
        heads[2].style.opacity = "100%";
    }
}

function edit_row(demo)
{   
    //check if the row have only 4 childern if no thw function will return  
    const no_child = document.getElementById(`ROW${demo}`).children.length;
    if(no_child == 4)
    {

        edit_task(demo);
        edit_periority(demo);
        //add "save" and "cancel" buttons at the end of the row"
        let sv_bt = document.createElement('button');
        let cncl_bt = document.createElement('button');

        sv_bt.setAttribute("onclick",`save_change(${demo})`) ;
        sv_bt.setAttribute("id",`buttons1${demo}`) ;

        cncl_bt.setAttribute("onclick",`cancel_row(${demo})`) ;
        cncl_bt.setAttribute("id",`buttons2${demo}`) ;


        sv_bt.innerText = "save";
        cncl_bt.innerText = "cancel";

        sv_bt.style.backgroundColor = "rgba(0, 0, 255,.4)"
        cncl_bt.style.backgroundColor = "rgba(255, 0, 0,.8)"

        document.getElementById(`ROW${demo}`).appendChild(sv_bt);
        document.getElementById(`ROW${demo}`).appendChild(cncl_bt);
    }
}

function edit_task(demo)
{
    let task_place = document.getElementById(`ROW${demo}`).children[0].innerText;  
    //rplace the text of task cell with input field
    const element = document.getElementById(`ROW${demo}`).children[0];
    const edit_task = document.createElement('input');
    edit_task.setAttribute("id",`field1${demo}`);
    element.replaceChild(edit_task, element.childNodes[0]);

    //MANAGE THE style of input field
    edit_task.style.width = "90%";
    edit_task.setAttribute("value", `${task_place}`) ;
}

function edit_periority(demo)
{
    let per_place = document.getElementById(`ROW${demo}`).children[1].innerText; 
     
    //rplace the text of task cell with input field
    const element = document.getElementById(`ROW${demo}`).children[1];
    const edit_per = document.createElement('input');
    edit_per.setAttribute("id",`field2${demo}`);
    element.replaceChild(edit_per, element.childNodes[0]);

    //MANAGE THE style of input field
    edit_per.setAttribute("value", `${per_place}`) ;
}


function save_change(demo)
{
    save_tsk_chang(demo);
    save_per_chang(demo);

    document.getElementById(`buttons1${demo}`).outerHTML = "";
    document.getElementById(`buttons2${demo}`).outerHTML = "";
}

function save_tsk_chang(demo)
{
    const element = document.getElementById(`ROW${demo}`).children[0];
    const edit_task = document.createElement('td');
    if(document.getElementById(`field1${demo}`).value == "")
    {
        edit_task.innerText = arr[demo][0];
    }
    else
    {
        edit_task.innerText = document.getElementById(`field1${demo}`).value;
    }
    element.replaceChild(edit_task, element.childNodes[0]);

    arr[demo][0] = edit_task.innerText;

}

function save_per_chang(demo)
{
    const element = document.getElementById(`ROW${demo}`).children[1];
    const edit_per = document.createElement('td');

    if(document.getElementById(`field2${demo}`).value == "")
    {
        edit_per.innerText = arr[demo][1];
    }
    else
    {
        let max_p = Number(document.getElementById(`field2${demo}`).value);
        if (isNaN(max_p))
        {
            alert("non valid periority input");
            edit_per.innerText = arr[demo][1];
            element.replaceChild(edit_per, element.childNodes[0]);
            return;
        } 
        if(max_p <= 0 || max_p > 3)
        {
            alert("periority out of range only from (1 to 3)");
            edit_per.innerText = arr[demo][1];
            element.replaceChild(edit_per, element.childNodes[0]);
            return;
        }
        edit_per.innerText = document.getElementById(`field2${demo}`).value;
    }

    element.replaceChild(edit_per, element.childNodes[0]);

    arr[demo][1] = edit_per.innerText;
}

function cancel_row(demo)
{
    cancel(demo);
    cncl(demo)

    document.getElementById(`buttons1${demo}`).outerHTML = "";
    document.getElementById(`buttons2${demo}`).outerHTML = "";

}

function cancel(demo)
{
    const element = document.getElementById(`ROW${demo}`).children[0];
    const edit_task = document.createElement('td');
    edit_task.innerText = arr[demo][0];
    element.replaceChild(edit_task, element.childNodes[0]);
}

function cncl(demo)
{
    const element = document.getElementById(`ROW${demo}`).children[1];
    const edit_per = document.createElement('td');
    edit_per.innerText = arr[demo][1];
    element.replaceChild(edit_per, element.childNodes[0]);
}




