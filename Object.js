/**
 * "Prototype Inheritance"
 * 
 * Sebenarnya bukan inheritance seperti pada halnya pada bahasa OOP
 * tetapi "penurunan" properti suatu objek pada JS sebenarnya adalah
 * properti yang terhubung (linked).
 *   
 */
const Transaksi = {
  pengirim: "admin@sajen.id",
};

const SemuaTransaksi = Object.create(Transaksi);
SemuaTransaksi.penerima = "mov@jump.com";


export { Transaksi, SemuaTransaksi };
