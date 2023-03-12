


function formValidation() {

    var name1 = document.getElementById("fName").value;
    var name2 = document.getElementById("sName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("newPassword").value;
    var error = document.getElementById("error");
    var text = "";

    if (name1.length < 3) {
        text = "please enter valid name --> at least 3 characters";
        error.innerHTML = text;
        return false;
    }

    else if (name2.length < 3) {
        text = "please enter valid name --> at least 3 characters";
        error.innerHTML = text;
        return false;
    }

    else if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
        text = "please enter valid email --> included with (@) & (.)";
        error.innerHTML = text;
        return false;
    }

    else if (password.length < 6) {
        text = "please enter valid password --> at least 6 characters";
        error.innerHTML = text;
        return false;
    }

    else {
        
        return true;
    }

}



function openRegister() {
    document.getElementById("register").style.height = "530px";
    document.getElementById("register").style.padding = "15px";
    document.getElementById("register").style.boxShadow = "0px 4px 10px 2px rgba(0, 0, 0, 0.103)";
    document.body.style.backgroundColor = "white";
    document.getElementById("optIn").style.position = "relative";
    document.getElementById("optIn").style.zIndex = "-1";
    document.getElementById("optIn").style.opacity = "20%";
}

function closeRegister() {
    document.getElementById("register").style.height = "0px";
    document.getElementById("register").style.padding = "0px";
    document.getElementById("register").style.boxShadow = "none";
    document.body.style.backgroundColor = "rgba(32, 3, 78, 0.075)";
    document.getElementById("optIn").style.zIndex = "1";
    document.getElementById("optIn").style.opacity = "100%";
}


function formValidate() {

    var email1 = document.getElementById("email1").value;
    var password1 = document.getElementById("newPassword1").value;
    var error1 = document.getElementById("error1");
    var text = "";


    if (email1.indexOf("@") == -1 || email1.indexOf(".") == -1) {
        text = "please enter valid email --> included with (@) & (.)";
        error1.innerHTML = text;
        return false;
    }

    else if (password1.length < 6) {
        text = "please enter valid password --> at least 6 characters";
        error1.innerHTML = text;
        return false;
    }

    else {
    
        return true;
    }

}
