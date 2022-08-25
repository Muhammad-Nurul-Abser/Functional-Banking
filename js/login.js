document.getElementById('button').addEventListener('click', function () {

    //get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;


    //get user password
    const passField = document.getElementById('user-pass');
    const userPass = passField.value;

    //check email and pass
    if (userEmail == 'a@gmail.com' && userPass == 'secret') {
        window.location.href = 'Home.html';
        emailField.value = ''
        passField.value = '';
    }
    else {
        console.log('Registration is required');
        emailField.value = '';
        passField.value = '';
    }
})