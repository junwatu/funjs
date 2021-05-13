import { pengirim, penerima } from './Dat'
/**
 * Pembuatan Objek
 * 
 * 2. Melalui Function (Fungsi)
 * 
 * Meskipun pembuatan objek secara literal (lihat Object.js) banyak dipakai di pengembangan aplikasi JavaScript
 * tetapi untuk pembuatan banyak objek yang serupa maka pembuatan objek dengan memakai function akan jauh 
 * lebih efektif.
 *  
 * 
 * Object.getPrototypeOf(Transaksi.prototype) === Object.prototype // true
 */
const Transaksi = function (pengirim, penerima) {
    this.pengirim = pengirim
    this.penerima = penerima
}

/**
 * tampilkanTransaksi() merupakan fungsi yang akan di-share untuk setiap instance, hampir sama dengan
 * metode statik pada OOP.
 */
Transaksi.prototype.tampilkanTransaksi = function tampilkanTransaksi() {
    return `Transaksi dari ${this.pengirim} ke ${this.penerima}`
}

function HashTransaksi(pengirim, penerima) {
    /**
     * ECMAScript 5 
     * Cara untuk mengatasi jika lupa dalam meng-instantiate memakai keyword new 🙃
     * 
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new.target
     */
    if (!new.target) {
        return new HashTransaksi(pengirim, penerima)
    }
    Transaksi.call(this, pengirim, penerima)
}

/**
 * Supaya HashTransaksi prototype nge-link dengan Transaksi maka HashTransaksi.prototype
 * harus di set ke prototype dari Transaksi.
 */
HashTransaksi.prototype = Object.create(Transaksi.prototype)

/**
 * Mengatur kembali constructor dari HashTransaksi ke HashTransaksi itu sendiri.
 * Tanpa kode dibawah maka constructor HashTransaksi akan menunjuk pada Transaksi.
 */
HashTransaksi.prototype.constructor = HashTransaksi

/**
 * INSTANCE tx tidak lagi mempunyai properti prototype tertulis seperti fungsi Transaksi
 * tetapi tx tetap mempunyai properti [[Prototype]].
 * 
 * Object.getPrototypeOf(tx) === Transaksi.prototype // true
 * 
 * Notasi rantai differential inheritance bisa dituliskan seperti berikut
 * 
 * tx.[[Prototype]] → Transaksi.prototype → Object.prototype → null
 * 
 */
const tx = new Transaksi(pengirim, penerima)


export { Transaksi, HashTransaksi, tx }

/**
 * Meskipun memakai fungsi constructor jauh lebih unggul daripada object literal
 * tetapi kekurangan terbesarnya adalah hilangnya mekanisme otomatis dalam
 * konfigurasi prototype, sehingga kalau salah dalam "wiring" prototype maka
 * desain akan menjadi kacau.
 */
