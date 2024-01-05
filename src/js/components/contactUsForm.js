import axios from "axios";

export const contactUsForm = () => ({
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

        const formData = new FormData(e.target);
        const requestURL = "/";

        try {
            const response = await axios.post(requestURL, formData, {
                "Content-Type": "multipart/form-data",
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
