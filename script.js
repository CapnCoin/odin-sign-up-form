const password1 = document.getElementById("password1");
const password2 = document.getElementById('password2');

function passwordsMatch(){
    if(password1.value.length >= 8){
        password1.setCustomValidity('');
    }
    else{
        password1.setCustomValidity('password must be at least 8 characters');
        password2.setCustomValidity('password must be at least 8 characters');
    }

    if(password1.value === password2.value){
        password1.setCustomValidity('');
        password2.setCustomValidity('');
    }
    else{
        password2.setCustomValidity('passwords do not match');
    }
}

password1.addEventListener('input', passwordsMatch);
password2.addEventListener('input', passwordsMatch);