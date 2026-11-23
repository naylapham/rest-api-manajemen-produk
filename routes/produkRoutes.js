const express = require("express");
const router = express.Router();
const produkController = require("../controllers/produkController");

// Routing CRUD untuk tema Manajemen Produk Crochet
router.get("/", produkController.getAllProduk);          // Menampilkan semua produk
router.get("/:id", produkController.getProdukById);      // Menampilkan detail produk berdasarkan ID
router.post("/", produkController.createProduk);         // Menambahkan produk baru
router.put("/:id", produkController.updateProduk);       // Mengubah data produk berdasarkan ID
router.delete("/:id", produkController.deleteProduk);    // Menghapus data produk berdasarkan ID

module.exports = router;