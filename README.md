# Project M4: Interaction Master ⚡
Tugas praktikum Minggu 4 - State & Events.

## 📸 Preview
![App Screenshot](pertemuan4\assets\Bukti screenshot P4.jpeg)

## 🛠️ Logic Implemented

- **useState Hook:** Mengelola 3 state terpisah — `count` (number), `name` (string), dan `colorIndex` (number) menggunakan `useState` dari React.
- **Event Handlers:** `onChangeText` untuk two-way binding real-time pada TextInput, mengupdate state `name` setiap karakter diketik.
- **Counter Logic:** Fungsi `handleIncrement` dan `handleDecrement` menggunakan functional updater `prev =>` untuk update state yang aman dan predictable.
- **Validation:** Tombol decrement dikunci saat `count === 0` — angka tidak bisa turun di bawah nol, disertai pesan validasi.
- **Toggle Color:** State `colorIndex` bersiklus melewati array `COLORS` menggunakan modulo `(prev + 1) % COLORS.length`, mengubah `backgroundColor` seluruh layar secara dinamis.

## 🔗 Demo
[Cek di Expo Snack](https://snack.expo.dev/@eykel21/93053a)
