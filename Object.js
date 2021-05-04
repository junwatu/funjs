/**
 * "Prototype Inheritance"
 * 
 * Sebenarnya bukan inheritance seperti pada halnya pada bahasa OOP
 * tetapi "penurunan" properti suatu objek pada JavaScript sebenarnya hanyalah
 * properti yang terhubung (linked) dan bukanlah pengkopian properti
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
