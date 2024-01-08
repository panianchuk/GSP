import axios from "axios";

export const socialForm = () => ({
    isSuccessMessage: false,

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

    const requestURL = "https://script.google.com/macros/s/AKfycbxJzpsXj1spJyml8L-N3O2gTdLkDFPFbjoUue0cAQMqpUaQ1irwMA7zM-KCK0bIF-gy8Q/exec";
    const formData = new FormData(e.target);

    try {
      const response = await axios({
        method: "post",
        url: requestURL,
        data: formData,
      });
        this.isSuccessMessage = true;
    } catch (error) {
      console.error("ERROR:", error);
    } finally {
      e.target.reset();
    }

      setTimeout(() => {
          this.isSuccessMessage = false;
      }, 2000);
  },
});
