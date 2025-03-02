/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{html,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "home-bg": "url('https://www.kayak.es/rimg/himg/b3/10/90/ice-178163-120191068-424668.jpg?width=1366&height=768&crop=true')",
                "bookingImage": "url('https://pro-static.h10hotels.com/gallery/CabeceraH10NOV2.jpg')"
            },
            backgroundColor: {
                primaryBg: "#f3f7ff",
                secondaryBg: "#924dff",
                secondaryHoverBg: "#7440c7",
                whiteBg: "#ffffff",
                white2: "#f9f9f9"
            },
            textColor: {
                primaryC: "#696969",
                primaryHoverC: "#924dff",
                blackColorC: "#2f3045",
                whiteColorC: "#ffffff"
            },
            fontSize: {
                primaryF: "16px",
                secondaryF: "20px",
                paragrapF: "24px",
                titleF: "55px"
            },
            clipPath: {
                'my-polygon': 'polygon(0px 0px, 100% 0%, 100% 100%, 0 300px)',
            },
        }
    },
    plugins: [
        require('tailwind-clip-path'),
    ],
}
