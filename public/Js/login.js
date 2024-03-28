
let dform = document.getElementById("d_form");
let pform = document.getElementById("p_form");
let dbtn = document.getElementById("doctot_btn");
let pbtn = document.getElementById("patient_btn");


function choose(n){
    if(n==1){
        dform.classList.remove("d-none");
        pform.classList.add("d-none");
        dbtn.classList.add("choose_card_active");
        pbtn.classList.remove("choose_card_active");
    }
    else if(n == 2){
        pform.classList.remove("d-none");
        dform.classList.add("d-none");
        pbtn.classList.add("choose_card_active")
        dbtn.classList.remove("choose_card_active");
    }
}