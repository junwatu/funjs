/**
 * Harus memakai Babel untuk mengeksekusi test berikut
 * https://jestjs.io/docs/en/getting-started#using-babel
 *
 */
import * as O from "../Object";
import { admin, penerima } from "../Dat";

describe("Test Object.create() → Transaksi", () => {
  // Transaksi
  test("Pengirim Object Transaksi", () => {
    expect(O.Transaksi.pengirim).toEqual(admin);
  });
});

describe("Test Object.create() → SemuaTransaksi", () => {
  // SemuaTransaksi
  test("Pengirim Object SemuaTransaksi", () => {
    expect(O.SemuaTransaksi.pengirim).toEqual(admin);
  });
  test("Penerima Object SemuaTransaksi", () => {
    expect(O.SemuaTransaksi.penerima).toEqual(penerima);
  });

  test("Prototipe Properti Penerima", () => {
    expect(O.SemuaTransaksi.pengirim).toStrictEqual(O.Transaksi.pengirim);
  })
})

describe("Test Prototipe of Object", () => {
  test("Prototipe Of SemuaTransaksi adalah Transaksi", () => {
    expect(Object.getPrototypeOf(O.SemuaTransaksi)).toStrictEqual(O.Transaksi);
  });

  test("Prototipe Of Transaksi adalah Object.prototype", () => {
    expect(Object.getPrototypeOf(O.Transaksi)).toStrictEqual(Object.prototype);
  })

  test("Prototipe Of SemuaTransaksi", () => {
    expect(O.Transaksi.isPrototypeOf(O.SemuaTransaksi)).toBeTruthy();
  })
});
