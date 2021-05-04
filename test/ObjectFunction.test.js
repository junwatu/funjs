/**
 * Harus memakai Babel untuk mengeksekusi test berikut
 * https://jestjs.io/docs/en/getting-started#using-babel
 *
 */

import * as OF from "../ObjectFunction";

describe("Test Object dari Function", () => {
    test("Prototype dari Fx adalah Object.prototype", () => {
        expect(Object.getPrototypeOf(OF.Fx.prototype)).toStrictEqual(Object.prototype);
    })

    test("Prototype dari xF adalah Fx.prototype", () => {
        expect(Object.getPrototypeOf(OF.xF)).toStrictEqual(OF.Fx.prototype);
    })
})