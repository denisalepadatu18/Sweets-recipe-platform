document.addEventListener('DOMContentLoaded', () => {
    // Manipularea DOM-ului (selectare după id, clasă, selectori CSS) - 3
    const navList = document.getElementById('main-nav-list');
    const logo = document.querySelector('.logo');
    const footerP = document.querySelector('footer p');
    const favList = document.getElementById('fav-list');

    // Buton dark mode 
    const dmLi = document.createElement('li'); // Crearea de elemente HTML - 4
    const dmLink = document.createElement('a');
    dmLink.href = "#";
    dmLink.id = "dark-mode-toggle";
    dmLink.innerText = "🌙 Dark Mode"; //  Modificare de proprietăți (innerText) -6

    dmLink.setAttribute('aria-label', 'Comută modul întunecat'); // Accesibilitate
    dmLi.appendChild(dmLink);

    if (navList) {
        navList.insertBefore(dmLi, navList.firstChild);
    }

    // Functioneliatate dark mode 
    dmLink.addEventListener('click', (e) => {  // Folosirea evenimentelor generate de mouse (click) - 5
        e.preventDefault();
        document.body.classList.toggle('dark-theme');
        const isDark = document.body.classList.contains('dark-theme'); // Folosirea proprietății classList - 12
        dmLink.innerText = isDark ? "☀️ Light Mode" : "🌙 Dark Mode"; // Modificare de proprietăți - 6
        localStorage.setItem('theme', isDark ? 'dark' : 'light'); // Folosirea localStorage (salvare temă) - 9 
    });

    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
        dmLink.innerText = "☀️ Light Mode";
    }

    // LOGIN / LOGOUT - b2
    const loginTrigger = document.getElementById('login-trigger');
    const loginExecBtn = document.getElementById('login-exec-btn');
    const loginModal = document.getElementById('login-modal');

    if (loginTrigger) {
        loginTrigger.addEventListener('click', (e) => {
            e.preventDefault();
            const user = localStorage.getItem('loggedUser');
            if (user) {
                localStorage.removeItem('loggedUser'); //Logout (ștergere LocalStorage)
                alert('Te-ai deconectat!');
                location.reload();
            } else {
                loginModal.style.display = (loginModal.style.display === 'none' || loginModal.style.display === '') ? 'block' : 'none'; //Modificare de proprietăți (style display) - 6
            }
        });
    }

    if (loginExecBtn) {
        loginExecBtn.addEventListener('click', () => {
            const u = document.getElementById('username-inp').value; // Inputuri funcționale (preluare valori text username/password) - 7
            const p = document.getElementById('password-inp').value;

            fetch('users.json')         // Cereri Ajax cu preluare date dintr-un fișier json - b1
                .then(res => res.json())
                .then(data => {        // Folosirea unei metode din clasa Array (find) - 10
                    const validUser = data.users.find(user => user.username === u && user.password === p);
                    if (validUser) {     // Sesiune (Login LocalStorage) - b2
                        localStorage.setItem('loggedUser', JSON.stringify(validUser));
                        alert('Bun venit, ' + validUser.nume + '!');
                        location.reload();
                    } else {
                        alert('Date incorecte!');
                    }
                });
        });
    }

    // Gestionare Favorite
    const savedUser = localStorage.getItem('loggedUser');
    if (savedUser) {
        const userObj = JSON.parse(savedUser);
        if (loginTrigger) loginTrigger.innerText = "❌ Logout (" + userObj.nume + ")";
        const favSection = document.getElementById('favorites-section');
        if (favSection) {
            favSection.style.display = 'block';
            incarcaFavorite();
        }
    }

    function incarcaFavorite() {
        if (!localStorage.getItem('colectieFavorite')) {    // Folosirea localStorage (păstrarea unei colecții de elemente) - 9
            localStorage.setItem('colectieFavorite', JSON.stringify(["Tort de ciocolată", "Tiramisu Clasic", "Cheesecake"]));
        }
        const favorite = JSON.parse(localStorage.getItem('colectieFavorite'));
        favList.innerHTML = '';   // Ștergerea de elemente HTML (golire listă) - 4
        favorite.forEach((item, index) => {
            const li = document.createElement('li');
            li.innerText = "⭐ " + item;
            li.style.cursor = "pointer";  // Modificarea stilului unui element - 2
            li.addEventListener('click', (event) => {  //Folosirea metodei stopPropagation - 13
                event.stopPropagation(); 
                console.log("Eliminat: " + event.target.innerText); // Folosirea proprietății target - 12
                favorite.splice(index, 1);
                localStorage.setItem('colectieFavorite', JSON.stringify(favorite));
                incarcaFavorite();
            });
            favList.appendChild(li);
        });
    }

    // SetInterval - 8
    setInterval(() => {
        const acum = new Date(); // Folosirea clasei Date - 10
        let ceas = document.getElementById('ceas');
        if (!ceas && footerP) {
            ceas = document.createElement('span');
            ceas.id = 'ceas';
            footerP.appendChild(ceas);
        }
        if (ceas) ceas.innerText = " | Ora: " + acum.toLocaleTimeString();  // Folosirea unei metode din clasa String - 10
    }, 1000);

    // Random Color Logo - 11
    if (logo) {  
        logo.addEventListener('mouseover', () => {
            const r = Math.floor(Math.random() * 256); // Folosirea clasei Math + Schimbarea aleatoare a valorilor unei proprietăți (color) - 10
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            logo.style.color = `rgb(${r}, ${g}, ${b})`;
        });
    }
     // Validare Chestionar
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); 
            
            const emailInp = document.getElementById('email').value; 
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Validarea datelor dintr-un formular folosind expresii regulate (Regex) - 14

            if (!emailRegex.test(emailInp)) {
                alert('Eroare: Vă rugăm să introduceți un email valid!');
            } else {
                
                alert('Mesajul a fost trimis cu succes! Vă vom contacta în curând și vom ține cont de părerea dumneavoastră!');
                contactForm.reset(); 
            }
        });
    }
  
    // Folosirea setTimeout - 8
    setTimeout(() => {
        if (logo) {
            const stilLogo = window.getComputedStyle(logo); // Folosirea metodei getComputedStyle - 13
            console.log("Culoare logo: " + stilLogo.color);
        }
    }, 4000);

    // Cerinta suplimentara - CANVAS
    const canvas = document.createElement('canvas');
    canvas.id = "canvas-logo";
    canvas.width = 50; 
    canvas.height = 50;
    if (footerP) footerP.prepend(canvas);

    const ctx = canvas.getContext('2d');
    
    function deseneazaInima(x, y, width, height) {
        ctx.save();
        ctx.beginPath();
        const topCurveHeight = height * 0.3;
        ctx.moveTo(x, y + topCurveHeight);
       
        ctx.bezierCurveTo(x, y, x - width / 2, y, x - width / 2, y + topCurveHeight);
        ctx.bezierCurveTo(x - width / 2, y + (height + topCurveHeight) / 2, x, y + (height + topCurveHeight) / 2, x, y + height);
        
        ctx.bezierCurveTo(x, y + (height + topCurveHeight) / 2, x + width / 2, y + (height + topCurveHeight) / 2, x + width / 2, y + topCurveHeight);
        ctx.bezierCurveTo(x + width / 2, y, x, y, x, y + topCurveHeight);
        
        ctx.fillStyle = "#ff69b4"; 
        ctx.fill();
        ctx.restore();
    }

    
    deseneazaInima(25, 10, 30, 35);
});