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
 * Object.getPrototypeOf(Fx.prototype) === Object.prototype // true
 */
const Fx = function () {
    this.gx = "Galak"
    this.fx = "Efek"
}

/**
 * Instance xF tidak lagi mempunyai properti prototype tertulis seperti Fx
 * tetapi tetap mempunyai properti [[Prototype]].
 * 
 * Object.getPrototypeOf(xF) === Fx.prototype // true
 * 
 * Notasi rantai differential inheritance bisa dituliskan seperti berikut
 * 
 * xF.[[Prototype]] → Fx.prototype → Object.prototype → null
 * 
 */
const xF = new Fx()

export { Fx, xF }