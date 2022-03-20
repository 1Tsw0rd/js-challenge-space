function space_change(){
    const space_list = ["space1.jpg","space2.jpg","space3.jpg","space4.jpg","space5.jpg","space6.jpg"];
    const space_body = document.querySelector(".space-body");
    const x = Math.floor(Math.random() * space_list.length);

    space_body.style.backgroundImage = `url("img/${space_list[x]}")`;

}
space_change();
setInterval(space_change, 5000);

/* 지쳐서... */
const letsgo_sensor_welcome = document.querySelector(".space-check__center-letsgo");

function welcome_start(){
    const pilot_name = localStorage.getItem("pilot_id");
    const welcome = document.querySelector(".welcome-div");
    welcome.innerHTML = `${pilot_name}님<br> 환영합니다`;

    setTimeout(function(){
        welcome.classList.add("welcome-div__ani");
    },10000);    
}

letsgo_sensor_welcome.addEventListener("click", welcome_start);