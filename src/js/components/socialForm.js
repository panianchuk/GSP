import axios from "axios";

export const socialForm = () => ({
  init() {
    document.addEventListener("DOMContentLoaded", () => {
      this.initFormSubmit();
    });
  },

  initFormSubmit() {
    document
      .getElementById("social-form")
      .addEventListener("submit", this.submitData.bind(this));
  },

  async submitData(e) {
    e.preventDefault();

    const requestURL = "";
    const formData = new FormData(e.target);

    try {
      const response = await axios({
        method: "post",
        url: requestURL,
        data: formData,
      });
    } catch (error) {
      console.error("ERROR:", error);
    } finally {
      //e.target.reset();
    }
  },
});
