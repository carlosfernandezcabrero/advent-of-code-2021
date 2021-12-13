import { step1 } from "../../src/step1";

describe("Step 1 tests", () => {
    test("should be return 4512", () => {
        const actual = step1();
        expect(actual).toBe(25410);
    });
});
