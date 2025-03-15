/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{html,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "home-bg": "url('https://www.hotelgumontgdl.com/img/slider_horizontal/1.jpg')",
                "imageRooms": "url('https://media.licdn.com/dms/image/v2/C4E12AQGjw2-7pO1KWw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1589378789505?e=2147483647&v=beta&t=qgbTQUvqhBXgvUdofx6zd__ldkeS4ESdtvtHdvmRhmQ')",
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
