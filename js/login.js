const pilot_form = document.querySelector(".login-form");
const pilot_id = document.querySelector("#login-id");
let pilot_pw = document.getElementById("login-pw");

localStorage.removeItem("pilot_id");
localStorage.removeItem("pilot_pw");
localStorage.removeItem("destination");
localStorage.removeItem("jarvis_vol");

/* <MAKE> index.html - login-form - input password */
function make_input_pilot_pw(){
    const pilot_pw_check = document.getElementById("login-pw");

    if(pilot_pw_check === null){
        const make_input = document.createElement("input");
        make_input.setAttribute("type","password");
        make_input.id="login-pw";
        make_input.name="password";
        make_input.required = "true";
        make_input.minLength = "5";
        make_input.maxLength = "20";
        make_input.placeholder="Please password";
        pilot_id.after(make_input);
        pilot_pw = document.getElementById("login-pw");

          document.getElementById("login-pw").className = "form_ani";
          document.getElementById("div__submit").className = "form_ani";
          document.getElementById("div__reset").className = "form_ani";

    } else if(pilot_pw_check !== null) {
          return;
    } else {
        alert("Error1");
    }
}

/* <MOVE&SetItem> index.html => space.html*/
function GoSpace(event){
    localStorage.setItem("pilot_id",pilot_id.value);
    localStorage.setItem("pilot_pw",pilot_pw.value);
}

pilot_id.addEventListener("click", make_input_pilot_pw);
pilot_form.addEventListener("submit", GoSpace);

