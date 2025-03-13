import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
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
    const avatarDiv = document.getElementById('avatar');
    const email = localStorage.getItem('userEmail');
    const dropdown = document.getElementById('dropdown');
    console.log(email)
    if (email !== '') {
        var firstLetter = email.charAt(0).toUpperCase();
        avatarDiv.innerHTML = firstLetter;
        avatarDiv.style.display = "flex";
        document.getElementById('loginButton').style.display = 'none';
        document.getElementById('registerButton').style.display = 'none';
    }
    else {
        document.getElementById('loginButton').style.display = 'column';
        document.getElementById('registerButton').style.display = 'column';
    }


    // Sự kiện click vào avatar để hiện dropdown
    avatarDiv.addEventListener('click', () => {
        dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
        document.getElementById('userEmailLabel').innerText = email;
    });

    // Sự kiện click nút đăng xuất
    document.getElementById('logoutButton').addEventListener('click', () => {
        auth.signOut().then(() => {
            localStorage.setItem('userEmail', '');
            console.log('Người dùng đã đăng xuất thành công.');
            window.location.href = 'index.html';
        }).catch((error) => {
            console.error('Đã xảy ra lỗi khi đăng xuất: ', error);
        });
        dropdown.style.display = 'none'; // Ẩn dropdown sau khi đăng xuất
    });

    // Ẩn dropdown khi click ra ngoài
    window.addEventListener('click', (event) => {
        if (!avatar.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.style.display = 'none';
        }
    });
})