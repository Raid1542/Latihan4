// server.js
const express = require("express");
const app = express();
const PORT = 8001;

const articles = [
  {
    id: 1,
    title: "Belajar express.js untuk pemula",
    description: "Panduan praktis untuk pemula dalam mempelajari Express.js framework web populer berbasis Node.js untuk membangun server dan REST API dengan cepat dan mudah.",
    urlimage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXcXmSX8EMvpOYa07VeTy0G5w_tOKjRrDPiQ&s",
    author: "Raden Walangsungsang"
  },
  {
    id: 2,
    title: "Membuat API dengan node.js",
    description: "Panduan lengkap untuk membuat API menggunakan Node.js dan Express.js.",
    urlimage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD8DJw0r9g1Nygb8UvFhqsaY7x_xpKlpHP5g&s",
    author: "Empu Gandring"
  },
];

//Endpoint GET /api/test/getarticle
app.get("/api/test/getarticle", (req, res) => {
  res.json({
    status: "success",
    data: articles
  });
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
