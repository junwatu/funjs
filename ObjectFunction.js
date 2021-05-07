/**
 * Pembuatan Objek
 * 
 * 2. Melalui Function (Fungsi)
 * 
 * Meskipun pembuatan objek secara literal (lihat Object.js) banyak dipakai di pengembangan aplikasi JavaScript
 * tetapi untuk pembuatan banyak objek serupa maka pembuatan objek dengan memakai function akan jauh 
 * lebih efektif.
 * 
 *  
 * 
 * Object.getPrototypeOf(Transaksi.prototype) === Object.prototype // true
 */
const Transaksi = function (pengirim, penerima) {
    this.pengirim = pengirim
    this.penerima = penerima
}

/**
 * Instance hashTransaksi tidak lagi mempunyai properti prototype tertulis seperti fungsi Transaksi
 * tetapi hashTransaksi tetap mempunyai properti [[Prototype]].
 * 
 * Object.getPrototypeOf(hashTransaksi0) === Transaksi.prototype // true
 * 
 * Notasi rantai differential inheritance bisa dituliskan seperti berikut
 * 
 * hashTransaksi.[[Prototype]] → Transaksi.prototype → Object.prototype → null
 * 
 */
const hashTransaksi = new Transaksi()

export { Transaksi as Fx, hashTransaksi as xF }