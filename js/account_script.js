var checkbox = document.getElementById("reg-log");
function tickCheckbox() {
    checkbox.checked = !checkbox.checked;
}
function showForm() {
    const params = new URLSearchParams(window.location.search);
    const formType = params.get('form');
    if (formType === 'register') {
        tickCheckbox();
    }
}

window.onload = showForm;
document.getElementById('imgSymbol').onclick = function () {
    window.location.href = '';
}

const togglePasswordElements = [
    { toggle: document.getElementById('toggle-password-login'), input: document.getElementById('login_password') },
    { toggle: document.getElementById('toggle-password-register'), input: document.getElementById('register_password') },
    { toggle: document.getElementById('toggle-password-reenter'), input: document.getElementById('register_reenter_password') }
];

togglePasswordElements.forEach(({ toggle, input }) => {
    toggle.addEventListener('click', () => {
        const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
        input.setAttribute('type', type);
        toggle.textContent = type === 'password' ? '👁️' : '👁️‍🗨️';
    });
});


