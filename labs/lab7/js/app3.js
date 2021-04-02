let username = document.getElementById("username");
let password = document.getElementById("password");
let dvResult = document.getElementById("dvResult")

function Info(){


    if((username.value == "IUPUIrocks") && (password.value == "1QAZ2wsx")){
        dvResult.innerHTML = "Success"
    } else{
        dvResult.innerHTML = "Wrong infomation"
    }   
    
}