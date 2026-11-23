const express = require("express");
const produkRoutes = require("./routes/produkRoutes");

const app = express();
const PORT = 3000;

// Middleware untuk parsing request body dalam format JSON
app.use(express.json());

// Endpoint dasar untuk memastikan server berjalan
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Selamat datang di REST API Sistem Manajemen Produk Crochet"
  });
});

// Daftarkan routes produk dengan prefix /api/produk
app.use("/api/produk", produkRoutes);

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});