import Alpine from 'alpinejs';
// import AlpineI18n from "alpinejs-i18n";
import './_vendor';
import { mobileMenu } from './store/mobile-menu';
import { stopScroll } from './store/stop-scroll';
import { hero } from './components/hero';
// import { content } from './vendor/content';

document.addEventListener('alpine:init', () => {
    // alpine store
    Alpine.store('mobileMenu', mobileMenu)
    Alpine.store('stopScroll', stopScroll)
    // alpine store end

    // alpine data
    Alpine.data('hero', hero);
})

// document.addEventListener("alpine-i18n:ready", function () {
//     let locale = "en";
//     window.AlpineI18n.create(locale, content);
// });

window.Alpine = Alpine
// Alpine.plugin(AlpineI18n);

Alpine.start()
