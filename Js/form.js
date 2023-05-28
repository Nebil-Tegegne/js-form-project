let id = (id) => document.getElementById(id)
let classes = (classes) => document.getElementsByClassName(classes)

let username = id("username"),
 email = id("email"),
 password= id("password"),
 form = id("form"),
 errorMsg = classes("error"),
 successIcon = classes("success-icon"),
 failureIcon = classes("failure-icon");

 form.addEventListener("submit", (e)=>{
    e.preventDefault();
     
    engine(username, 0, "user name can not be blanck");
    engine(email, 1 ,"email can not be blanck");
    engine(password, 2, "password can not be blanck");
  
   });

 let engine = (id, serial, message) =>{
    if(id.value.trim() ===''){
        errorMsg[serial].innerHTML = message;
        failureIcon[serial].style.opacity = "1";
        successIcon[serial].style.opacity = "0";
    }else{
        errorMsg[serial].innerHTML = "";
        successIcon[serial].style.opacity = "1";
        failureIcon[serial].style.opacity = "0";
       
 }
 }