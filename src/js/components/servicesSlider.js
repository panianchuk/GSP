import Swiper, { Pagination, Navigation } from "swiper";
Swiper.use([Pagination, Navigation]);

import { services_content } from "../vendor/slider_content";

export const servicesSlider = () => ({
  services_content,
  slider: null,

  init() {
    document.addEventListener("DOMContentLoaded", () => {
      this.initSwiper();
      this.services_content = services_content;

      console.log(2345);
    });
  },

  initSwiper() {
    this.slider = new Swiper(".services-swiper", {
      slidesPerView: 1,
      navigation: {
        nextEl: ".services-next",
        prevEl: ".services-prev",
      },
      pagination: {
        el: ".services-pagination",
        type: "custom",
        renderCustom: function (swiper, current, total) {
          return `<span class="current">${current}</span><span class="total">${total}</span>`;
        },
      },
    });
  },
});
