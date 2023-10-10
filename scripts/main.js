function logar(){
    var login = document.getElementById('e-mail').value;
    var senha = document.getElementById('senha').value;
    
    if(login == "admin@admin.com.br" && senha =="admin"){
            alert('Sucesso');
            location.href ="profile/profile.html";
    }else{
        alert('Usuario ou senha incorretos');

    }

}