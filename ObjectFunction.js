/**
 * "Pembuatan Objek malalui Constructor Fungsi"
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