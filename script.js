// Accessing all input errors
let nameError = document.querySelector("#name-error");
let phoneError = document.querySelector("#phone-error");
let passwordError = document.querySelector("#password-error");
let emailError = document.querySelector("#email-error");
let messageError = document.querySelector("#message-error");
let submitError = document.querySelector("#submit-error");
// console.log(messageError);


//validating name input
function nameValidation() {
    let userName = document.querySelector("#full-name").value;
    if(userName === ""){
        nameError.innerHTML="Name Is Req"
        document.querySelector("#full-name").style.border = "red 1.5px solid";
        return false;
    }else if(!userName.match(/^[A-Za-z]*\s{1}[A-Za-z]*\s{1}[A-Za-z]/)){
        nameError.innerHTML="Write Ur First '3' Name";
        document.querySelector("#full-name").style.border = "red 1.5px solid";
        return false;
    }else{
        nameError.innerHTML=`<i class="fa-solid icon fa-square-check  fa-2xl" style="color: #63E6BE;"></i>`;
        document.querySelector("#full-name").style.border = "#63E6BE 1.5px solid";
        return true;
    }
  }

//validating phone input
function phoneValidation(){
    let userPhone =document.querySelector("#phone-num").value;
    if(userPhone === ""){
        phoneError.innerHTML="phone Is Req"
        document.querySelector("#phone-num").style.border = "red 1.5px solid";
        return false;
    }else if(!userPhone.match(/^\d{11}$/) || userPhone.indexOf("01") !== 0){
        phoneError.innerHTML="write 14 numbers";
        document.querySelector("#phone-num").style.border = "red 1.5px solid";
        return false;
    }else{
        phoneError.innerHTML=`<i class="fa-solid icon fa-square-check  fa-2xl" style="color: #63E6BE;"></i>`;
        document.querySelector("#phone-num").style.border = "#63E6BE 1.5px solid";
        return true;
    }

}

//validating password  input
function passwordValidation(){
    let userPassword =document.querySelector("#password").value;
    if(!userPassword.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/   )){
        passwordError.innerHTML="password Is Req";
        document.querySelector("#password").style.border = "red 1.5px solid";
        return false;
    }else{
        passwordError.innerHTML=`<i class="fa-solid icon fa-square-check  fa-2xl" style="color: #63E6BE;"></i>`;
        document.querySelector("#password").style.border = "#63E6BE 1.5px solid";
        return true;
    }

}

//validating email input
function emailValidation(){
    let userEmail =document.querySelector("#email").value;
    if(userEmail === ""){
        emailError.innerHTML="E-mail Is Req";
        document.querySelector("#email").style.border = "red 1.5px solid";
        return false;
    }else if(!userEmail.match(/\S+@\S+\.\S+/)){
        emailError.innerHTML="Enter Valid E-mail";
        document.querySelector("#email").style.border = "red 1.5px solid";
        return false;
    }else{
        emailError.innerHTML=`<i class="fa-solid icon fa-square-check  fa-2xl" style="color: #63E6BE;"></i>`;
        document.querySelector("#email").style.border = "#63E6BE 1.5px solid";
        return true;
    }
}

//validating Text area
function meassageValidation(){
    // console.log("executed");
    let userMessage =document.querySelector("#message").value;
    let needed = 20 ;
    let left = needed - userMessage.length;
    // console.log(userMessage);
    if(!userMessage.match(/^(?!.*[<>])[\s\S]{20,}$/)){
        messageError.innerHTML=`${left} chs left`;
        document.querySelector("#message").style.border = "red 1.5px solid";
        return false;
    }else{
        messageError.innerHTML=`<i class="fa-solid icon fa-square-check  fa-2xl" style="color: #63E6BE;"></i>`;
        document.querySelector("#message").style.border = "#63E6BE 1.5px solid";
        return true;
    }
}



// hide and show password
let eye = document.querySelector(".eye");
// console.log(eye);
eye.addEventListener('click',()=>{
    let pass = document.querySelector("#password") ;
    if(eye.classList.contains('fa-eye-slash') && pass.getAttribute('type')==='password'){
        eye.classList.replace("fa-eye-slash","fa-eye");
        pass.setAttribute("type", "text");
    }else{
        eye.classList.replace("fa-eye","fa-eye-slash");
        pass.setAttribute("type", "password");
    }
})


// whole Validation
document.addEventListener('DOMContentLoaded',()=>{
    form = document.querySelector("form");
    form.addEventListener("submit",
    (event)=>{
        event.preventDefault();
        if(!nameValidation() || !emailValidation() || !passwordValidation() || !phoneValidation() || !meassageValidation()   ){
            submitError.innerHTML=`Please Fix The Error Above`;
            setTimeout(()=>{
                submitError.style.display = "none"
                },3000);
            return false;
        }else{
            submitError.innerHTML=`<i class="fa-solid icon fa-square-check  fa-2xl" style="color: #63E6BE;"></i>`;
            // converting Form Content to json object.  
            let formData = new FormData(form);
            // js object
            const jsObject = Object.fromEntries(formData);
            // json object
            const jsonObject =JSON.stringify(jsObject) ;
            console.log(jsObject);
            console.log(jsonObject);
            return true;
        }
    })
})

