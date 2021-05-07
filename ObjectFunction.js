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

export { Transaksi as Fx, tx as xF }