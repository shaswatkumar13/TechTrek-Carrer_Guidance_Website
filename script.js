const wrapper = document.querySelector('.wrapper');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});

function func() {
    var email = document.getElementById("username").value;
    var pass = document.getElementById('password').value;
    if (email == 'shaswatkumar451@gmail.com' && pass == '123456') {
        alert("Successful!");
        window.location.href = "Main.html";
    } else {
        alert("Invalid credentials");
    }
}

