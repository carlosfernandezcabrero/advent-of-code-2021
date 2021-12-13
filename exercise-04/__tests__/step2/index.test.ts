import { get_sum_unmarked, step2 } from "../../src/step2";

describe("Step 2 tests", () => {
    test("should be return 4512", () => {
        const actual = step2();
        expect(actual).toBe(2730);
    });

    test("should be return 9", () => {
        const data: string[] = ["1,2,3", "1,2,-3"];
        const actual = get_sum_unmarked(data);
        expect(actual).toBe(9);
    });
});
