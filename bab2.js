//function

// function sapa() {
//   console.log('Halo semuanya!')
// }

// // Memanggil function
// sapa() // "Halo semuanya!"

// function sapaNama(nama) {
//   console.log('Halo ' + nama + '!')
// }

// sapaNama('Budi') // "Halo Budi!"
// sapaNama('Ani') // "Halo Ani!"

// function tambah(a, b) {
//   return a + b
// }

// let hasil = tambah(5, 3)
// console.log(hasil) // 8

// function kali(x, y) {
//   return x * y
// }

// function bagi(x, y) {
//   return x / y
// }

// console.log(kali(4, 5)) // 20
// console.log(bagi(10, 2)) // 5

// function cekLulus(nilai) {
//   if (nilai >= 75) {
//     return 'Lulus'
//   } else {
//     return 'Tidak Lulus'
//   }
// }

// console.log(cekLulus(80)) // "Lulus"
// console.log(cekLulus(60)) // "Tidak Lulus"

// // Function biasa
// function salam(nama) {
//   return 'Halo ' + nama
// }

// // Arrow function
// const salamArrow = (nama) => {
//   return 'Halo ' + nama
// }

// console.log(salam('Budi')) // "Halo Budi"
// console.log(salamArrow('Budi')) // "Halo Budi"

// // Function untuk menghitung
// function hitungLuas(p, l) {
//   let hasil = p * l
//   return hasil
// }

// const hitungLuasArrow = (p, l) => {
//   let hasil = p * l
//   return hasil
// }

// console.log(hitungLuas(5, 3)) // 15
// console.log(hitungLuasArrow(5, 3)) // 15

// // Perbedaan cara penulisan
// // Function biasa bisa dipanggil sebelum didefinisikan
// hitungUmur(2005) // Ini bisa jalan

// function hitungUmur(tahunLahir) {
//   return 2024 - tahunLahir
// }

// // Arrow function harus didefinisikan dulu baru bisa dipanggil
// const hitungUmurArrow = (tahunLahir) => {
//   return 2024 - tahunLahir
// }

// console.log(hitungUmurArrow(2005)) // 19

//class

// class Orang {
//   constructor(nama) {
//     this.nama = nama
//   }
// }

// // Membuat object dari class
// let orang1 = new Orang('Ali')
// let orang2 = new Orang('Budi')

// console.log(orang1.nama) // "Ali"
// console.log(orang2.nama) // "Budi"

// class Siswa {
//   constructor(nama, umur) {
//     this.nama = nama
//     this.umur = umur
//   }
// }

// let siswa1 = new Siswa('Citra', 17)
// let siswa2 = new Siswa('Doni', 18)

// console.log(siswa1.nama + ' berumur ' + siswa1.umur) // "Citra berumur 17"
// console.log(siswa2.nama + ' berumur ' + siswa2.umur) // "Doni berumur 18"

// class Hewan {
//   constructor(nama, jenis) {
//     this.nama = nama
//     this.jenis = jenis
//   }

//   bersuara() {
//     console.log(this.nama + ' sedang bersuara')
//   }

//   info() {
//     return this.nama + ' adalah ' + this.jenis
//   }
// }

// let hewan1 = new Hewan('Fluffy', 'kucing')
// hewan1.bersuara() // "Fluffy sedang bersuara"
// console.log(hewan1.info()) // "Fluffy adalah kucing"

// class Buku {
//   constructor(judul, penulis) {
//     this.judul = judul
//     this.penulis = penulis
//     this.dibaca = false
//   }

//   bacaBuku() {
//     this.dibaca = true
//     console.log('Sedang membaca ' + this.judul)
//   }

//   statusBuku() {
//     if (this.dibaca) {
//       return 'Sudah dibaca'
//     } else {
//       return 'Belum dibaca'
//     }
//   }
// }

// let buku1 = new Buku('Harry Potter', 'J.K. Rowling')
// console.log(buku1.statusBuku()) // "Belum dibaca"

// buku1.bacaBuku() // "Sedang membaca Harry Potter"
// console.log(buku1.statusBuku()) // "Sudah dibaca"

// class Counter {
//   constructor() {
//     this.angka = 0
//   }

//   tambah() {
//     this.angka = this.angka + 1
//   }

//   kurang() {
//     this.angka = this.angka - 1
//   }

//   lihat() {
//     console.log('Angka sekarang: ' + this.angka)
//   }
// }

// let counter = new Counter()
// counter.lihat() // "Angka sekarang: 0"

// counter.tambah()
// counter.tambah()
// counter.lihat() // "Angka sekarang: 2"

// counter.kurang()
// counter.lihat() // "Angka sekarang: 1"

// class NilaiSiswa {
//   constructor(nama) {
//     this.nama = nama
//     this.nilai = 0
//   }

//   setNilai(nilai) {
//     this.nilai = nilai
//   }

//   cekLulus() {
//     if (this.nilai >= 75) {
//       return this.nama + ' lulus'
//     } else {
//       return this.nama + ' tidak lulus'
//     }
//   }

//   tampilkanInfo() {
//     console.log('Nama: ' + this.nama + ', Nilai: ' + this.nilai)
//   }
// }

// let siswa = new NilaiSiswa('Andi')
// siswa.setNilai(85)
// siswa.tampilkanInfo() // "Nama: Andi, Nilai: 85"
// console.log(siswa.cekLulus()) // "Andi lulus"

//promise

// let janji = new Promise((resolve, reject) => {
//   let berhasil = true

//   if (berhasil) {
//     resolve('Sukses!')
//   } else {
//     reject('Gagal!')
//   }
// })

// janji
//   .then((hasil) => console.log(hasil)) // "Sukses!"
//   .catch((error) => console.log(error))

// let janji2 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve('Data berhasil diambil!')
//   }, 2000) // 2 detik
// })

// janji2.then((hasil) => {
//   console.log(hasil) // Setelah 2 detik: "Data berhasil diambil!"
// })

// function cekCuaca() {
//   return new Promise((resolve, reject) => {
//     let cuacaBagus = Math.random() > 0.5 // 50% kemungkinan

//     if (cuacaBagus) {
//       resolve('Cuaca cerah!')
//     } else {
//       reject('Cuaca hujan!')
//     }
//   })
// }

// cekCuaca()
//   .then((hasil) => console.log(hasil))
//   .catch((error) => console.log(error))

// function ambilData() {
//   return new Promise((resolve) => {
//     console.log('Sedang mengambil data...')

//     setTimeout(() => {
//       resolve('Data siswa berhasil diambil!')
//     }, 3000)
//   })
// }

// ambilData().then((hasil) => {
//   console.log(hasil)
// })
// // Output:
// "Sedang mengambil data..."
// (tunggu 3 detik)
// "Data siswa berhasil diambil!"

// function downloadFile() {
//   return new Promise((resolve, reject) => {
//     let berhasil = Math.random() > 0.3 // 70% kemungkinan berhasil

//     setTimeout(() => {
//       if (berhasil) {
//         resolve('File berhasil didownload!')
//       } else {
//         reject('Download gagal!')
//       }
//     }, 1000)
//   })
// }

// // Menggunakan try catch
// async function cobaDownload() {
//   try {
//     console.log('Mulai download...')
//     let hasil = await downloadFile()
//     console.log(hasil)
//   } catch (error) {
//     console.log('Error: ' + error)
//   }
// }

// cobaDownload()

// function langkah1() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log('Langkah 1 selesai')
//       resolve('hasil1')
//     }, 1000)
//   })
// }

// function langkah2(data) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log('Langkah 2 selesai dengan ' + data)
//       resolve('hasil2')
//     }, 1000)
//   })
// }

// // Menjalankan berurutan
// langkah1()
//   .then((hasil) => langkah2(hasil))
//   .then((hasil) => {
//     console.log('Semua langkah selesai dengan ' + hasil)
//   })

// function tugasA() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('Tugas A selesai')
//     }, 2000)
//   })
// }

// function tugasB() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('Tugas B selesai')
//     }, 1000)
//   })
// }

// function tugasC() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('Tugas C selesai')
//     }, 3000)
//   })
// }

// // Menunggu semua tugas selesai
// Promise.all([tugasA(), tugasB(), tugasC()]).then((hasil) => {
//   console.log('Semua tugas selesai:')
//   hasil.forEach((tugas) => console.log(tugas))
// })

// function simulasiLogin(username, password) {
//   return new Promise((resolve, reject) => {
//     console.log('Sedang login...')

//     setTimeout(() => {
//       if (username === 'admin' && password === '123') {
//         resolve('Login berhasil! Selamat datang ' + username)
//       } else {
//         reject('Username atau password salah!')
//       }
//     }, 2000)
//   })
// }

// async function login() {
//   try {
//     let hasil = await simulasiLogin('admin', '123')
//     console.log(hasil)
//   } catch (error) {
//     console.log('Login gagal: ' + error)
//   }
// }

// login()