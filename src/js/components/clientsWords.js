import Swiper, { Pagination, Navigation } from "swiper";
Swiper.use([Pagination, Navigation]);

import { clients_words } from "../vendor/slider_content";

export const clientsWords = () => ({
  clients_words,
  slider: null,

  init() {
    document.addEventListener("DOMContentLoaded", () => {
      this.initSwiper();
    });
  },

  initSwiper() {
    this.slider = new Swiper(".clients_words-swiper", {
      navigation: {
        nextEl: ".clients_words-next",
        prevEl: ".clients_words-prev",
      },
      pagination: {
        el: ".clients_words-pagination",
        type: "custom",
        renderCustom: function (swiper, current, total) {
          return `<span class="current">${current}</span><span class="total">${total}</span>`;
        },
      },
    });
  },
});
