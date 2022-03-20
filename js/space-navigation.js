const letsgo_flag = document.querySelector(".space-check__center-letsgo");

function navigation_operating(){
    document.querySelector(".navigation-display").className = "navigation_operating_ani";
    setTimeout(navigation_start, 3000);
}

function navigation_start(){
    document.querySelector(".navigation_operating_ani").className = "navigation_start_ani";
}

letsgo_flag.addEventListener("click", navigation_operating);

/* space.html - navigation - jarvis system */
const jarvis_call = document.querySelector(".navition-jarvis-call");
const jarvis_up = document.querySelector(".navition-jarvis-up");
const jarvis_down = document.querySelector(".navition-jarvis-down");
const jarvis_vol = document.querySelector(".navigation-jarvis-volume");

let jarvis_toggle = 1;
localStorage.setItem("jarvis_toggle", jarvis_toggle);

const jarvis_audio = new Audio();

let jarvis_volume = 50;
localStorage.setItem("jarvis_vol", jarvis_volume);
jarvis_vol.innerText = jarvis_volume;

function jarvis_operating(){

    jarvis_toogle = localStorage.getItem("jarvis_toggle");

    if(jarvis_toggle === 1) {
        jarvis_start();

    } else if (jarvis_toggle === 0) {
        jarvis_stop();

    }
}

function jarvis_start(){
    jarvis_audio.src = "./mp3/jarvis_sound.mp3";    
    jarvis_audio.volume = parseFloat(jarvis_volume) * 0.01;
    jarvis_audio.play();
    jarvis_call.innerText = "Playing..";
    jarvis_toggle = 0;
    localStorage.setItem("jarvis_toggle", jarvis_toggle);

    if(jarvis_toggle === 0){
        setTimeout(jarvis_stop,37000);
    } else if(jarvis_toggle === 1){
        jarvis_stop();
    }
}

function jarvis_stop(){
    jarvis_audio.pause();
    jarvis_call.innerHTML = "Call super computer <br>▶";
    jarvis_toggle = 1;
    localStorage.setItem("jarvis_toggle", jarvis_toggle);
}

function jarvis_vol_save(vol){
    localStorage.setItem("jarvis_vol", vol);
    jarvis_audio.volume = parseFloat(vol) * 0.01;
}

function jarvis_vol_up(){
    jarvis_volume = localStorage.getItem("jarvis_vol");

    if(jarvis_volume < 100 && jarvis_volume >= 0) {
    jarvis_volume = parseInt(jarvis_volume) + 10;
    jarvis_vol_save(jarvis_volume);
    jarvis_vol.innerText = jarvis_volume;   

    } else if(parseInt(jarvis_volume) === 100) {
        alert("Volume no up");
    }
}

function jarvis_vol_down(){
    jarvis_volume = localStorage.getItem("jarvis_vol");

    if(jarvis_volume <= 100 && jarvis_volume > 0) {
    jarvis_volume = parseInt(jarvis_volume) - 10;
    jarvis_vol_save(jarvis_volume);
    jarvis_vol.innerText = jarvis_volume;   

    } else if(parseInt(jarvis_volume) === 0) {
        alert("Volume no down");
    }
}

jarvis_call.addEventListener("click", jarvis_operating);
jarvis_up.addEventListener("click", jarvis_vol_up);
jarvis_down.addEventListener("click", jarvis_vol_down);