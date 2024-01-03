import Alpine from "alpinejs";

export const mobileMenu = {
  visible: false,
  show() {
    this.visible = true;
    Alpine.store("stopScroll").enable();
  },
  hide() {
    this.visible = false;
    Alpine.store("stopScroll").disable();
  }
};
