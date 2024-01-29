window.onload = function() {
    let toggle = true;
    // create img tag, set the attributes

    let img = document.createElement('img');
    // let img_two = document.createElement('img');
    img.setAttribute('src','img/theater1.png')
 
    let see_more = document.createElement('a');
    see_more.classList.add('change')
    see_more.setAttribute('href', '#about');
    see_more.textContent= "Read More";
    let hero = document.querySelector('.hero-layer');
    let heroText = document.querySelector('.hero-layer h2');

    setInterval(function() {
        if(heroText){
            if (toggle) {
                heroText.textContent = 'Welcome to Our Theatre';
                hero.appendChild(see_more)
                img.setAttribute('src', 'img/theater1.png');
            } else {
                heroText.textContent = 'View Our Gallery';
                hero.removeChild(see_more);
                // see_more.textContent= "View Gallery";
                img.setAttribute('src', 'img/theater2.jpg');
            }
            hero.appendChild(img);
        }

        toggle = !toggle;
    }, 2000);
};


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-item");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


