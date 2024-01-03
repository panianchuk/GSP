import Alpine from "alpinejs";
// import AlpineI18n from "alpinejs-i18n";

import './_vendor';
import { mobileMenu } from './store/mobile-menu';
import { stopScroll } from './store/stop-scroll';
import { hero } from './components/hero';
import { socialForm } from "./components/socialForm";
import { clientsWords } from "./components/clientsWords";
// import { content } from './vendor/content';

document.addEventListener('alpine:init', () => {
    // alpine store
    Alpine.store('mobileMenu', mobileMenu)
    Alpine.store('stopScroll', stopScroll)
    // alpine store end

  // alpine data
  Alpine.data("hero", hero);
  Alpine.data("clientsWords", clientsWords);
  Alpine.data("socialForm", socialForm);
});

// document.addEventListener("alpine-i18n:ready", function () {
//     let locale = "en";
//     window.AlpineI18n.create(locale, content);
// });

window.Alpine = Alpine;
// Alpine.plugin(AlpineI18n);

Alpine.start();

//=== SMOTH SCROll TO LINK NAVIGATION ===//
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const targetPosition = target.getBoundingClientRect().top + window.scrollY;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});
//=== SCROll TO TOP ANIMATION ===//
let prevScrollpos = window.pageYOffset;
const scrollToTop = document.getElementById("scrollToTop");

window.onscroll = function() {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollpos < currentScrollPos || currentScrollPos === 0) {
        scrollToTop.style.bottom = "-100px";
    } else {
        scrollToTop.style.bottom = "20px";
    }
    prevScrollpos = currentScrollPos;
}
