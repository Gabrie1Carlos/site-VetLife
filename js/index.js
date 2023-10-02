function login(){
    window.location.href ="perfil.html" 
}
function voltar(){
    window.location.href= "home.html"
}
function pet(){
    firebase.auth().signInWithEmailAndPassword(
        form.email().value, form.password().value
    ).then(response =>{

        console.log('success', response)
        window.location.href = "pet.html";
    }).catch(error => {
        console.log('error', error)
    
    });
}