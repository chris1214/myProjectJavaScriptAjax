/**
 * Created by christopher on 20/04/18.
 */
function validarSubmit(myUsers) {
    var form = document.querySelector('#form');
    var name = form.name.value;
    var password = form.password.value;

    var nameJson = myUsers.name;
    var passwordJson = myUsers.password;

    if (name == nameJson && password == passwordJson){
        console.log('true')
    }else {
        console.log('False')
    }

}
validarSubmit();