window.onload = function() {
    let toggle = true;
    // create img tag, set the attributes

    let img = document.createElement('img');
    // let img_two = document.createElement('img');
    img.setAttribute('src','img/theater1.png')
 
    let see_more = document.createElement('a');
    see_more.classList.add('change')
    see_more.setAttribute('href', 'about.html');
    see_more.textContent= "Read More";
    let hero = document.querySelector('.hero-layer');
    let heroText = document.querySelector('.hero-layer h2');

    let view_gallery = document.createElement('a'); // Create the "View Gallery" button
    view_gallery.classList.add('change')
    view_gallery.setAttribute('href', 'gallery.html'); // Set the href to the gallery section
    view_gallery.textContent= "View Gallery";
    

    setInterval(function() {
        if(heroText){
            if (toggle) {
                heroText.textContent = 'Welcome to Our Theatre';
                hero.appendChild(see_more)
                if(hero.contains(view_gallery)) { // Check if "View Gallery" button exists
                    hero.removeChild(view_gallery); // Remove "View Gallery" button
                }
                img.setAttribute('src', 'img/theater1.png');

            } else {
                heroText.textContent = 'View Our Gallery';
                hero.appendChild(view_gallery); 
                if(hero.contains(see_more)) { // Check if "Read More" button exists
                    hero.removeChild(see_more); // Remove "Read More" button
                }
                img.setAttribute('src', 'img/theater2.jpg');
            }
            hero.appendChild(img);
        }

        toggle = !toggle;
    }, 5000);
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


