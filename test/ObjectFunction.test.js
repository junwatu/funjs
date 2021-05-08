/**
 * Harus memakai Babel untuk mengeksekusi test berikut
 * https://jestjs.io/docs/en/getting-started#using-babel
 *
 */

import { Transaksi, tx } from "../ObjectFunction";

describe("Test Object dari Function", () => {
    test("Prototype dari Transaksi adalah Object.prototype", () => {
        expect(Object.getPrototypeOf(Transaksi.prototype)).toStrictEqual(Object.prototype);
    })

    test("Prototype dari tx adalah Transaksi.prototype", () => {
        expect(Object.getPrototypeOf(tx)).toStrictEqual(Transaksi.prototype);
    })
})