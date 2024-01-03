/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
    theme: {
        extend: {
            fontFamily: {
                Poppins: ["Poppins", "sans-serif"],
            },
            colors: {
                lightGrey: "#d2d2d2",
                ...colors,
            },
        },
        screens: {
            us: "370px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            "lg-2": "1150px",
            xl: "1280px",
            "xl-1": "1366px",
            "xl-2": "1536px",
        },
        spacing: {
            0: "0",
            0.5: "0.125rem" /* 2px */,
            1: "0.25rem" /* 4px */,
            1.5: "0.375rem" /* 6px */,
            2: "0.5rem" /* 8px */,
            2.5: "0.625rem" /* 10px */,
            3: "0.75rem" /* 12px */,
            3.5: "0.875rem" /* 14px */,
            3.75: "0.9375rem" /* 15px */,
            4: "1rem" /* 16px */,
            4.5: "1.125rem" /* 18px */,
            5: "1.25rem" /* 20px */,
            5.5: "1.375rem" /* 22px */,
            6: "1.5rem" /* 24px */,
            6.5: "1.625rem" /* 26px */,
            7: "1.75rem" /* 28px */,
            7.5: "1.875rem" /* 30px */,
            8: "2rem" /* 32px */,
            8.5: "2.125rem" /* 34px */,
            9: "2.25rem" /* 36px */,
            9.5: "2.375rem" /* 38px */,
            10: "2.5rem" /* 40px */,
            11: "2.75rem" /* 44px */,
            12: "3rem" /* 48px */,
            12.5: "3.125rem" /* 50px */,
            14: "3.5rem" /* 56px */,
            15: "3.75rem" /* 60px */,
            16: "4rem" /* 64px */,
            18: "4.5rem" /* 72px */,
            20: "5rem" /* 80px */,
            22: "5.5rem" /* 88px */,
            24: "6rem" /* 96px */,
            25: "6.25rem" /* 100px */,
            28: "7rem" /* 112px */,
            30: "7.5rem" /* 120px */,
            32: "8rem" /* 128px */,
            36: "9rem" /* 144px */,
            37.5: "9.375rem" /* 150px */,
            40: "10rem" /* 160px */,
            44: "11rem" /* 176px */,
            48: "12rem" /* 192px */,
            50: "12.5rem" /* 200px */,
            52: "13rem" /* 208px */,
            56: "14rem" /* 224px */,
            60: "15rem" /* 240px */,
            64: "16rem" /* 256px */,
            72: "18rem" /* 288px */,
            80: "20rem" /* 320px */,
            96: "24rem" /* 384px */,
        },
        container: {
            center: true,
            padding: {
                DEFAULT: "20px",
                md: "60px",
                xl: "100px",
            },
        },
        important: false,
    },
    plugins: [
        function ({ addComponents }) {
            addComponents({
                ".container": {
                    maxWidth: "100%",
                    "@screen xl": {
                        maxWidth: "1440px",
                    },
                },
            });
        },
    ],
    content: ["./src/**/*.{html,js}"],
};
