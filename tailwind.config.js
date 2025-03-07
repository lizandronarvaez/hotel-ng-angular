/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{html,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "home-bg": "url('https://www.viaempresa.cat/uploads/s1/25/95/13/64/els-fons-inversors-busquen-oportunitats-davant-la-crisi-del-sector-hoteler-istock.jpeg')",
                "bookingImage": "url('https://pro-static.h10hotels.com/gallery/CabeceraH10NOV2.jpg')",
                "imageRooms": "url('https://media.licdn.com/dms/image/v2/C4E12AQGjw2-7pO1KWw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1589378789505?e=2147483647&v=beta&t=qgbTQUvqhBXgvUdofx6zd__ldkeS4ESdtvtHdvmRhmQ')",
                "reservation": "url('https://www.serinf.it/wp-content/uploads/2022/07/Cover-blog-check-in-check-out.jpg')"
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
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
            }
        }
    },
    plugins: [
        require('tailwind-clip-path'),
    ],
}
