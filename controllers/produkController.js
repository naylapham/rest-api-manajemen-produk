const produkModel = require("../models/produkModel");

// GET /api/produk - Menampilkan semua produk
const getAllProduk = (req, res) => {
  const data = produkModel.getAllProduk();
  res.status(200).json({
    success: true,
    message: "Berhasil mengambil seluruh data produk crochet",
    total: data.length,
    data: data
  });
};

// GET /api/produk/:id - Menampilkan detail produk berdasarkan ID
const getProdukById = (req, res) => {
  const id = parseInt(req.params.id);
  const produk = produkModel.getProdukById(id);

  if (!produk) {
    return res.status(404).json({
      success: false,
      message: `Produk dengan ID ${id} tidak ditemukan`,
      data: null
    });
  }

  res.status(200).json({
    success: true,
    message: "Detail produk berhasil ditemukan",
    data: produk
  });
};

// POST /api/produk - Menambahkan produk baru
const createProduk = (req, res) => {
  const { kode_produk, nama_produk, kategori, varian, harga, stok } = req.body;

  // Validasi input agar field wajib tidak kosong
  if (!kode_produk || !nama_produk || !kategori || !varian || harga === undefined || stok === undefined) {
    return res.status(400).json({
      success: false,
      message: "Semua field (kode_produk, nama_produk, kategori, varian, harga, stok) wajib diisi",
      data: null
    });
  }

  const produkBaru = produkModel.createProduk({
    kode_produk,
    nama_produk,
    kategori,
    varian,
    harga,
    stok
  });

  res.status(201).json({
    success: true,
    message: "Produk crochet berhasil ditambahkan",
    data: produkBaru
  });
};

// PUT /api/produk/:id - Mengubah data produk berdasarkan ID
const updateProduk = (req, res) => {
  const id = parseInt(req.params.id);
  const produkDiperbarui = produkModel.updateProduk(id, req.body);

  if (!produkDiperbarui) {
    return res.status(404).json({
      success: false,
      message: `Gagal memperbarui: Produk dengan ID ${id} tidak ditemukan`,
      data: null
    });
  }

  res.status(200).json({
    success: true,
    message: "Data produk berhasil diperbarui",
    data: produkDiperbarui
  });
};

// DELETE /api/produk/:id - Menghapus data produk berdasarkan ID
const deleteProduk = (req, res) => {
  const id = parseInt(req.params.id);
  const produkTerhapus = produkModel.deleteProduk(id);

  if (!produkTerhapus) {
    return res.status(404).json({
      success: false,
      message: `Gagal menghapus: Produk dengan ID ${id} tidak ditemukan`,
      data: null
    });
  }

  res.status(200).json({
    success: true,
    message: "Data produk berhasil dihapus",
    data: produkTerhapus
  });
};

module.exports = {
  getAllProduk,
  getProdukById,
  createProduk,
  updateProduk,
  deleteProduk
};