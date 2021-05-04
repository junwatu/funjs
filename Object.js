/**
 * "Prototype Language"
 * 
 * Pada bahasa ber-prototipe, "Differential Inheritance" yaitu inheritance yang 
 * tetap menjaga referensi objek yang diturunkan terhadap objek asal dan ini umumnya ada 
 * pada bahasa ber-prototipe seperti JavaScript.
 * 
 * Sebenarnya bukan inheritance seperti pada halnya pada bahasa OOP umum (Java, C# dll)
 * tetapi "penurunan" properti suatu objek pada JavaScript sebenarnya hanyalah
 * properti yang terhubung (linked) dan bukanlah pengkopian properti dan state
 * seperti pada class-based language. Kunci perbedaan antara JavaScript dan bahasa OOP 
 * class lainnya adalah Linked VS Copy.
 * 
 * Inheritance VS Prototype?
 * 
 * Inheritance hanyalah bagian dari mekanisme prototype, inheritance bisa sebagian (differential inheritance)
 * dimana inheritance terjadi dengan mekanisme terhubung (linked) ataupun (full) inheritance 
 * seperti pada class based language, dimana semua properti dan state dikopi oleh turunannya.
 *   
 */
import { admin, penerima } from "./Dat"

const Transaksi = {
  pengirim: admin,
};

/**
 * Pembuatan Object baru dengan Object.create() berdasar Object Transaksi
 */
const SemuaTransaksi = Object.create(Transaksi);
SemuaTransaksi.penerima = penerima;

export { Transaksi, SemuaTransaksi };


/**
 * "Rantai Prototype"
 * 
 * Rantai differential inheritance sebagai berikut:
 * 
 * SemuaTransaksi.[[Prototype]] → Transaksi.[[Prototype]] → Object.prototype → null
 * 
 * ---
 * 
 * Notasi Transaksi.[[Prototype]] adalah untuk menunjukkan prototipe dari Transaksi.
 * 
 * Kalau dilihat pada console dev tools chrome, Properti [[Prototype]] identik dengan
 *  __proto__ dan properti ini bisa diakses melalui 2 metode:
 * 
 * - Object.getPrototypeOf()
 * - Object.setPrototypeOf()
 * 
 * ======================================================================================
 * Kasus spesial adalah properti prototype pada kreasi object melalui constructor fungsi.
 * dan juga pada properti prototype pada Object.
 * 
 * - func.prototype
 * - Object.prototype
 * 
 * Properti prototype disini gunanya adalah untuk menghubungkan tiap instance dari object 
 * yang dibuat melalui constructor (new pada fungsi) dengan prototipe fungsi atau Object.
 * 
 * Untuk fungsi, lebih jelasnya lihat file ObjectFunction.js
 * ======================================================================================
 * 
 */
