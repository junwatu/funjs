/**
 * Harus memakai Babel untuk mengeksekusi test berikut
 * https://jestjs.io/docs/en/getting-started#using-babel
 *
 */
import * as O from "../Object";

describe("Test Properti Object", () => {
  test("Test Properti Pengirim", () => {
    expect(O.SemuaTransaksi.pengirim).toEqual("admin@sajen.id");
  });
  test("Test Properti Penerima", () => {
    expect(O.SemuaTransaksi.penerima).toEqual("mov@jump.com");
  });
  test("Test Properti Pengirim", () => {
    expect(O.Transaksi.pengirim).toEqual("admin@sajen.id");
  });
});

describe("Test Object", () => {
  test("Test Prototipe Of", () => {
    expect(Object.getPrototypeOf(O.SemuaTransaksi)).toStrictEqual(O.Transaksi);
  });
});
