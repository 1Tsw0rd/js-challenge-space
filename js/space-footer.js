
const list_p = document.querySelectorAll(".space-check__center-list p");
const complete_p = document.querySelectorAll(".space-check__center-complete p");

const pilot_id = localStorage.getItem("pilot_id");
const letsgo = document.querySelector(".space-check__center-letsgo");


const SHOW_TIMER = 1000;

function show_list_p_0(){
    list_p[0].innerHTML = `[${pilot_id}] biometric data`

    const x = 0;
    list_p[x].className = "space-check__ani";
    setTimeout(() => complete_p[x].className = "space-check__ani", SHOW_TIMER);  
}
function show_list_p_1(){
    const x = 1;
    list_p[x].className = "space-check__ani";
    setTimeout(() => complete_p[x].className = "space-check__ani", SHOW_TIMER); 
}
function show_list_p_2(){
    const x = 2;
    list_p[x].className = "space-check__ani";
    setTimeout(() => complete_p[x].className = "space-check__ani", SHOW_TIMER); 
}
function show_list_p_3(){
    const x = 3;
    list_p[x].className = "space-check__ani";
    setTimeout(() => complete_p[x].className = "space-check__ani", SHOW_TIMER); 
}
function show_list_p_4(){
    const x = 4;
    list_p[x].className = "space-check__ani";
    setTimeout(() => complete_p[x].className = "space-check__ani", SHOW_TIMER); 
}
function show_list_p_5(){
    const x = 5;
    list_p[x].className = "space-check__ani";
    setTimeout(() => complete_p[x].className = "space-check__ani", SHOW_TIMER); 
}
function show_list_p_6(){
    const x = 6;
    list_p[x].className = "space-check__ani";
    setTimeout(() => complete_p[x].className = "space-check__ani", SHOW_TIMER);
    setTimeout(show_lestgo, 2000);
}

function show_lestgo(){
    letsgo.removeAttribute("hidden"); //미리 누르기 방지용
    letsgo.classList.add("space-check__ani");
}

show_list_p_0();
setTimeout(show_list_p_1,1500);
setTimeout(show_list_p_2,3500);
setTimeout(show_list_p_3,5500);
setTimeout(show_list_p_4,7500);
setTimeout(show_list_p_5,9500);
setTimeout(show_list_p_6,11500);


/* space.html - footer - Animation */

const space_check = document.querySelector(".space-check");
const space_check_center = document.querySelector(".space-check__center");

function hide_check_system(){
    space_check.style.backgroundColor = "transparent";
    space_check_center.remove();

    setTimeout(hide_check_imgs, 1000);
}

function hide_check_imgs(){
    document.querySelector("#space-check__top").className = "space-check__ani-top";
    document.querySelector("#space-check__bottom").className = "space-check__ani-bottom";
    document.querySelector("#space-check__right").className = "space-check__ani-right";
    document.querySelector("#space-check__left").className = "space-check__ani-left";

    setTimeout(hide_footer, 3100); /* space-footer remove*/
}

function hide_footer(){
    const hide_footer = document.querySelector(".space-footer");
    hide_footer.remove();
}

letsgo.addEventListener("click", hide_check_system);

/* space.html - footer - button - Translation */
function trans_kor(){
    letsgo.innerText = "이것은 한 명의 인간에게는 작은 발걸음이지만, 인류에게는 위대한 도약이다. (클릭!)";
}

function trans_eng(){
    letsgo.innerText = "One small step for a man, one giant leap for mankind (Click!)";
}
letsgo.addEventListener("mouseover", trans_kor);
letsgo.addEventListener("mouseleave", trans_eng);