/**
 * Created by christopher on 20/04/18.
 */
var submit = document.querySelector('#submit');
submit.addEventListener('click', function (event) {
    event.preventDefault();
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:3000/user');

    xhr.addEventListener('load', function () {
        var result = xhr.responseText;
        var json = JSON.parse(result);

        json.forEach(function (myUsers) {
            validarSubmit(myUsers)
        })
    });
    xhr.send();
});
