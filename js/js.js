function validateEmail(emailField)
{
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var emailField = document.getElementById("email").value;
    if (reg.test(emailField) == false)
    {
        alert("Please insert a valid email address");
        return false;
    }
    return true;
}

function validateName(inputName)
{
    var letters = new RegExp(/^[A-Za-z\s]+$/);
    var inputName = document.getElementById("userName").value;
    if(letters.test(inputName) == false)
    {
        alert("Please insert a valid name");
        return false;   
    }
        return true;
}

(function() {
    'use strict';
    window.addEventListener('load', function() {
        var forms = document.getElementsByClassName('needs-validation');
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();
