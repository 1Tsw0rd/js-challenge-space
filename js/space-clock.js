const clock_ui_date = document.querySelector(".clock-ui-date");
const clock_ui_time = document.querySelector(".clock-ui-time");
const date_day = ["Sun","Mon","Tue","Wed","Thu", "Fri","Sat"];

function getclock(){
    const clock_base = new Date();
    const year = String(clock_base.getFullYear()).padStart(4,"0");
    const month = String(clock_base.getMonth()+1).padStart(2,"0");
    const date = String(clock_base.getDate()).padStart(2,"0");
    const tempday = clock_base.getDay();
    const day = date_day[tempday];
    const hours = String(clock_base.getHours()).padStart(2,"0");
    const minutes = String(clock_base.getMinutes()).padStart(2,"0");
    const seconds = String(clock_base.getSeconds()).padStart(2,"0");

    clock_ui_date.innerText = `${year}y ${month}m ${date}d ${day}`;
    clock_ui_time.innerText = `${hours}h ${minutes}m ${seconds}s`
}

getclock();
setInterval(getclock, 1000);