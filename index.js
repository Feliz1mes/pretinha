function logar(){
    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;

    if(usuario == "isabela" && senha == "28052023"){
        swal("Oii amorzinho!");
        location.href = "principal.html";
    }
    else{
        swal("Vaza daqui vagabunda", "...Oc não é minha pretinha");
    }

}