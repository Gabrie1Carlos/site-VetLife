function login(){
    window.location.href ="perfil.html" 
}
function voltar(){
    window.location.href= "home.html"
}
function entro(){
    firebase.auth().signInWithEmailAndPassword(
        form.email().value, form.password().value
    ).then(response =>{
        
        window.location.href = "pet.html"

    }).catch(error => {
        console.log('error', error)
    
    });
}