// Data awal sebagai penyimpanan sementara tanpa database
let produk = [
  {
    id: 1,
    kode_produk: "CRC-001",
    nama_produk: "Amigurumi Bebek Topi Kuning",
    kategori: "Amigurumi",
    varian: "Bebek - Kuning Putih",
    harga: 45000,
    stok: 10
  },
  {
    id: 2,
    kode_produk: "CRC-002",
    nama_produk: "Amigurumi Karakter Fiksi Mini",
    kategori: "Amigurumi",
    varian: "Karakter Fiksi - Biru",
    harga: 65000,
    stok: 5
  },
  {
    id: 3,
    kode_produk: "CRC-003",
    nama_produk: "Keychain Ikan Paus Rajut",
    kategori: "Keychain",
    varian: "Ikan - Pastel Blue",
    harga: 18000,
    stok: 25
  },
  {
    id: 4,
    kode_produk: "CRC-004",
    nama_produk: "Keychain Buah Stroberi",
    kategori: "Keychain",
    varian: "Buah - Merah",
    harga: 15000,
    stok: 30
  },
  {
    id: 5,
    kode_produk: "CRC-005",
    nama_produk: "Shoulder Bag Motif Bunga Daisy",
    kategori: "Tas & Pouch",
    varian: "Tas - Cream Hijau",
    harga: 120000,
    stok: 4
  },
  {
    id: 6,
    kode_produk: "CRC-006",
    nama_produk: "Pocket Rajut Serut Mini",
    kategori: "Tas & Pouch",
    varian: "Pocket - Sage Green",
    harga: 35000,
    stok: 15
  },
  {
    id: 7,
    kode_produk: "CRC-007",
    nama_produk: "Bouquet Bunga Tulip Rajut (3 Tangkai)",
    kategori: "Aksesoris & Buket",
    varian: "Bouquet - Pink Putih",
    harga: 75000,
    stok: 8
  },
  {
    id: 8,
    kode_produk: "CRC-008",
    nama_produk: "Bandana Rajut Motif Granny Square",
    kategori: "Aksesoris & Buket",
    varian: "Bandana - Cokelat Susu",
    harga: 28000,
    stok: 14
  }
];

// Mengambil seluruh data produk
const getAllProduk = () => {
  return produk;
};

// Mengambil detail satu produk berdasarkan ID
const getProdukById = (id) => {
  return produk.find((item) => item.id === id);
};

// Menambahkan produk baru ke dalam array
const createProduk = (dataBaru) => {
  // Membuat ID baru berdasarkan ID tertinggi agar tidak bentrok jika ada data yang dihapus
  const idBaru = produk.length > 0 ? Math.max(...produk.map((item) => item.id)) + 1 : 1;

  const produkBaru = {
    id: idBaru,
    kode_produk: dataBaru.kode_produk,
    nama_produk: dataBaru.nama_produk,
    kategori: dataBaru.kategori,
    varian: dataBaru.varian,
    harga: Number(dataBaru.harga),
    stok: Number(dataBaru.stok)
  };

  produk.push(produkBaru);
  return produkBaru;
};

// Mengubah data produk berdasarkan ID
const updateProduk = (id, dataUpdate) => {
  const index = produk.findIndex((item) => item.id === id);
  if (index === -1) return null;

  produk[index] = {
    ...produk[index],
    kode_produk: dataUpdate.kode_produk ?? produk[index].kode_produk,
    nama_produk: dataUpdate.nama_produk ?? produk[index].nama_produk,
    kategori: dataUpdate.kategori ?? produk[index].kategori,
    varian: dataUpdate.varian ?? produk[index].varian,
    harga: dataUpdate.harga !== undefined ? Number(dataUpdate.harga) : produk[index].harga,
    stok: dataUpdate.stok !== undefined ? Number(dataUpdate.stok) : produk[index].stok
  };

  return produk[index];
};

// Menghapus data produk berdasarkan ID
const deleteProduk = (id) => {
  const index = produk.findIndex((item) => item.id === id);
  if (index === -1) return null;

  const [produkTerhapus] = produk.splice(index, 1);
  return produkTerhapus;
};

module.exports = {
  getAllProduk,
  getProdukById,
  createProduk,
  updateProduk,
  deleteProduk
};