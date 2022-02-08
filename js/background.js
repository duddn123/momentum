const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg"
]

const randomBackground = images[Math.floor(Math.random() * images.length)];

const backgroundimg = document.createElement("img");

backgroundimg.src = `img/${randomBackground}`;

document.body.appendChild(backgroundimg);
