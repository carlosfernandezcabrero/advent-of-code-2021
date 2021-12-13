import { get_sum_unmarked, step1 } from "../../src/step1";

describe("Step 1 tests", () => {
    test("should be return 4512", () => {
        const actual = step1();
        expect(actual).toBe(25410);
    });

    test("should be return 9", () => {
        const data: number[][] = [
            [1, 2, 3],
            [1, 2, -3],
        ];
        const actual = get_sum_unmarked(data);
        expect(actual).toBe(9);
    });
});
