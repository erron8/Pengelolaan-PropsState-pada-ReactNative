# Kafe Kucing

Aplikasi satu layar React Native dengan JavaScript untuk melihat menu dan menambah pesanan.

## Menjalankan aplikasi

```bash
npm install
npm start
```

Pindai kode QR dengan Expo Go. Untuk pratinjau web, tekan `w` pada terminal Expo atau jalankan `npm run web`.

## Komponen

- `App.js`: parent yang menyimpan daftar menu dan state `totalPesanan`.
- `components/OrderSummary.js`: menerima props `totalCount` dan menampilkan promo mulai lima item.
- `components/MenuItem.js`: menerima `nama`, `harga`, dan callback `onTambahPesanan`; setiap kartu menyimpan state `qty` sendiri.
