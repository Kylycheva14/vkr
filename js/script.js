const burger = document.querySelector(".burger");
const burger__menu = document.querySelector(".burger__menu");

burger.addEventListener("click", () =>{
    burger__menu.classList.toggle("active")
})


$(document).ready(function(){
    $("#submit") .click(function(){
        var name=$("#name") .val();
        var password=$("#password").val();
        var password_2=$("#password_2").val();
        var phone=$("#phone").val();
        var email=$("#email").val();
        if(name==""){
            alert("Введите ваше имя");
        }  
        else if(password==""){
            alert("Введите ваш пароль");
        }
        else if(password_2==""){
            alert("Повторите пароль");
        }
        else if(password!=password_2){
            alert("Введенные пароли не совпадают");
        }
        else if(password.length<6){
            alert("Пароль должен быть не меньше 6 символов");
        }
        else if(phone==""){
            alert("Введите ваш телефон");
        }
        else if(email==""){
            alert("Введите вашу почту");
        } else{
            alert("ok")
        }
    });
});

