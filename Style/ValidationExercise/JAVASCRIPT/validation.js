function home(){
    window.location.replace("C:/gitub/Saravanan-fulllstack/Style/ValidationExercise/HTML/Home.html");
}
function engineer(){
    window.location.replace("C:/gitub/Saravanan-fulllstack/Style/ValidationExercise/HTML/engineerDb.html");
}
function employee(){
    window.location.replace("C:/gitub/Saravanan-fulllstack/Style/ValidationExercise/HTML/employeeDb.html");
}

function validateLogin(){
    let userName=document.getElementById('uName').value;
    let password=document.getElementById('passwd').value;
    if(userName==='Test'&& password==='123123'){
        window.location.href="C:/gitub/Saravanan-fulllstack/Style/ValidationExercise/HTML/Home.html";
    }else{
        alert('invalid username or password');
    }
}



