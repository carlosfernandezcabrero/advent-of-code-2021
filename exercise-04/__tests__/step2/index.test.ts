import { step2 } from "../../src/step2";

describe("Step 2 tests", () => {
    test("should be return 4512", () => {
        const actual = step2();
        expect(actual).toBe(2730);
    });
});
