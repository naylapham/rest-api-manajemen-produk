# REST API Sistem Manajemen Produk Crochet

Aplikasi backend REST API berbasis Node.js dan Express.js untuk mengelola katalog produk kerajinan rajut (crochet) menggunakan penyimpanan sementara berbasis array (in-memory).

# Cara Menjalankan Project
1. Clone repositori ini
2. Jalankan `npm install`
3. Jalankan `node app.js`
4. Server aktif di `http://localhost:3000`

# Dokumentasi Endpoint API

| Method | Endpoint | Fungsi | Status Sukses |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/produk` | Menampilkan seluruh data produk crochet | `200 OK` |
| `GET` | `/api/produk/:id` | Menampilkan detail produk berdasarkan ID | `200 OK` |
| `POST` | `/api/produk` | Menambahkan produk crochet baru | `201 Created` |
| `PUT` | `/api/produk/:id` | Memperbarui data produk berdasarkan ID | `200 OK` |
| `DELETE` | `/api/produk/:id` | Menghapus data produk berdasarkan ID | `200 OK` |

# Contoh Request Body (`POST` & `PUT`)
```json
{
  "kode_produk": "CRC-009",
  "nama_produk": "Amigurumi Penguin Syal Merah",
  "kategori": "Amigurumi",
  "varian": "Penguin - Hitam Putih",
  "harga": 50000,
  "stok": 12
}