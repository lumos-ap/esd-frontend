let count_value = 0;
window.onload = hide_seek;

function increase_counter(){
    // alert(count_value);
    let counter = document.getElementById("count_value");
    counter.innerText = "Count Value "+count_value;
    count_value++;
}

let hide = true;
function hide_seek(){
    let alert_text = document.getElementById("hide_seek");
    if(hide){
        alert_text.style.display = 'none';
    }else{
        alert_text.style.display = 'block';

    }
    hide = !hide;
}
function  reset_counter(){

    let counter = document.getElementById("count_value");
    count_value=0;
    counter.innerText = "Count Value "+count_value;
}
