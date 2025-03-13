import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAp19vXErWWy8NusrMss2CelFKWO4PDtOM",
    authDomain: "alzheimer-diagnosing.firebaseapp.com",
    projectId: "alzheimer-diagnosing",
    storageBucket: "alzheimer-diagnosing.firebasestorage.app",
    messagingSenderId: "366076077234",
    appId: "1:366076077234:web:944e18ae1575ec2e13d5ab",
    measurementId: "G-2CQ52VQT1W"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.addEventListener('DOMContentLoaded', function () {
    const signInButton = document.getElementById('login_submit');
    signInButton.addEventListener('click', (event) => {
        event.preventDefault();
        const em = document.getElementById('email').value.trim();
        const psw = document.getElementById('login_password').value;

        if (!em) {
            alert("Vui lòng nhập email.");
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(em)) {
            alert("Vui lòng nhập email hợp lệ.");
            return;
        }

        if (!psw) {
            alert("Vui lòng nhập mật khẩu.");
            return;
        }
        
        signInWithEmailAndPassword(auth, em, psw)
            .then((userCredential) => {
                const user = userCredential.user;
                localStorage.setItem('loggedInUserId', user.uid);
                localStorage.setItem('userEmail', em);
                alert("Login successful!");
                console.log(localStorage.getItem('userEmail'));
                window.location.href = 'index.html';
                // checkUid(em);
                // const home = document.getElementById('body-part');
                // const loginRegister = document.getElementById('login-register');
                // home.style.display = 'flex';
                // loginRegister.style.display = "none";
            })
            .catch((error) => {
                alert(error.message, 'signInMessage');
            });
    })

    const signUpButton = document.getElementById('register_submit');
    signUpButton.addEventListener('click', (event) => {
        event.preventDefault();
        const email = document.getElementById('register_email').value.trim();
        const password = document.getElementById('register_password').value;
        const cpassword = document.getElementById('register_reenter_password').value;

        if (!email) {
            alert("Vui lòng nhập email.");
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Vui lòng nhập email hợp lệ.");
            return;
        }

        if (!password) {
            alert("Vui lòng nhập mật khẩu.");
            return;
        }
        
        if (password.length < 6) {
            alert("Mật khẩu cần có ít nhất 6 ký tự.");
            return;
        }

        if (password !== cpassword) {
            alert("Mật khẩu không khớp. Vui lòng kiểm tra lại.");
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                alert("Register successful!");
                localStorage.setItem('userEmail', email);
                window.location.href = 'index.html';
            })
            .catch((error) => {
                const errorMessage = error.message;
                alert(errorMessage, 'signUpMessage');
            });
    })


})
// user = auth.currentUser;
onAuthStateChanged(auth, (user) => {
  if (user) {
      localStorage.setItem('userEmail', user.email);
  }else {
      //người dùng đã đăng xuất
    //   localStorage.setItem('userEmail', '');
  }
})