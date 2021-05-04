/**
 * Harus memakai Babel untuk mengeksekusi test berikut
 * https://jestjs.io/docs/en/getting-started#using-babel
 *
 */
import * as O from "../Object";

describe("Test Object.create() → Transaksi", () => {
  // Transaksi
  test("Pengirim Object Transaksi", () => {
    expect(O.Transaksi.pengirim).toEqual("admin@sajen.id");
  });
});

describe("Test Object.create() → SemuaTransaksi", () => {
  // SemuaTransaksi
  test("Pengirim Object SemuaTransaksi", () => {
    expect(O.SemuaTransaksi.pengirim).toEqual("admin@sajen.id");
  });
  test("Penerima Object SemuaTransaksi", () => {
    expect(O.SemuaTransaksi.penerima).toEqual("mov@jump.com");
  });
})

describe("Test Prototipe of Object", () => {
  test("Prototipe Of SemuaTransaksi adalah Transaksi", () => {
    expect(Object.getPrototypeOf(O.SemuaTransaksi)).toStrictEqual(O.Transaksi);
  });
});
