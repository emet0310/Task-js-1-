

function calc(a , s , d , f , g , h , j , k , l , q , w , e) {
    return (a + s + d + f + g + h + j + k + l + q + w + e)/12;
}
console.log(calc(2 , 3 , 5 , 8 , 7 , 9 , 4 , 6 , 10 , 18 , 11 , 1)); 





function formValidate() {
    var name = document.getElementById("userName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var error = document.getElementById("error");
    var text = "";
    


    if (name.length < 4) {
        text = "please enter a valid username";
        error.innerHTML = text;
        return false;
    }

    else if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
        text = "please enter a valid email";
        error.innerHTML = text;
        return false;
    }

    else if (isNaN(phone) || phone.length != 11) {
        text = "please enter a valid phone";
        error.innerHTML = text;
        return false;
    }

    else {
        alert("Alright")
        return true;
    }
}