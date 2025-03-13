/*              Navigation Bar              */
const navItems = document.querySelectorAll('.nav-item');
const mainTitle = document.getElementById('main-title');
const mainText = document.getElementById('main-text');

navItems.forEach(item => {
    item.addEventListener('click', function (event) {
        event.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết
        const content = item.getAttribute('data-content');
        mainText.textContent = content; // Cập nhật nội dung chính
        mainTitle.textContent = item.textContent; // Cập nhật tiêu đề
    });
});

document.getElementById('loginButton').onclick = function () {
    // const home = document.getElementById('body-part');
    // const loginRegister = document.getElementById('login-register');
    // const loginButton = document.getElementById('loginButton');
    // const registerButton = document.getElementById('registerButton');
    // home.style.display = 'none';
    // loginButton.style.display = 'none';
    // registerButton.style.display = 'none';
    // loginRegister.style.display = "flex";
    window.location.href = 'account.html?form=login';
};

document.getElementById('registerButton').onclick = function () {
    window.location.href = 'account.html?form=register';
    // var checkbox = document.getElementById("reg-log");
    // checkbox.checked = !checkbox.checked;
    // const home = document.getElementById('body-part');
    // const loginRegister = document.getElementById('login-register');
    // const loginButton = document.getElementById('loginButton');
    // const registerButton = document.getElementById('registerButton');
    // home.style.display = 'none';
    // loginButton.style.display = 'none';
    // registerButton.style.display = 'none';
    // loginRegister.style.display = "flex";
};

document.getElementById('imgSymbol').onclick = function () {
    window.location.href = '';
}