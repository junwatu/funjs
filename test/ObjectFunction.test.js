/**
 * Harus memakai Babel untuk mengeksekusi test berikut
 * https://jestjs.io/docs/en/getting-started#using-babel
 *
 */

import { Transaksi, HashTransaksi, tx } from "../ObjectFunction";
import { penerima, pengirim } from "../Dat"

const tx2 = new Transaksi(pengirim, penerima);
const hTx = new HashTransaksi(pengirim, penerima);
const hTx2 = new HashTransaksi(pengirim, penerima); 

describe("Test Object dari Function", () => {
    test("Prototype dari Transaksi adalah Object.prototype", () => {
        expect(Object.getPrototypeOf(Transaksi.prototype)).toStrictEqual(Object.prototype);
    })

    test("Prototype dari tx adalah Transaksi.prototype", () => {
        expect(tx).toBeInstanceOf(Transaksi);
        expect(Object.getPrototypeOf(tx)).toStrictEqual(Transaksi.prototype);
    })

    test("Protoype dari HashTransaksi adalah Transaksi", () => {
        expect(Object.getPrototypeOf(HashTransaksi.prototype)).toStrictEqual(Transaksi.prototype);
    })

    test("Contructor dari HashTransaksi adalah HashTransaksi", () => {
        expect(HashTransaksi.prototype.constructor).toStrictEqual(HashTransaksi)
    })

    test("Share function", () => {
        expect(tx2).toBeInstanceOf(Transaksi);
        expect(tx.tampilkanTransaksi).toStrictEqual(tx2.tampilkanTransaksi);

        expect(hTx).toBeInstanceOf(HashTransaksi);
        expect(hTx.tampilkanTransaksi).toStrictEqual(hTx2.tampilkanTransaksi);
    })

})