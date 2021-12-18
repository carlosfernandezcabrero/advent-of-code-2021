import { filter_lines, get_small, step1 } from "../../src/step1";
import { CoordType } from "../../src/types";

describe("Step 1 tests", () => {
    test("should be return horizontal lines", () => {
        const data: CoordType[] = [
            { x1: 4, x2: 3, y1: 2, y2: 2 },
            { x1: 3, x2: 5, y1: 2, y2: 4 }
        ];
        const { horizontal_lines } = filter_lines(data);
        expect(1).toBe(horizontal_lines.length);
    });

    test("should be return vertical lines", () => {
        const data: CoordType[] = [
            { x1: 3, x2: 3, y1: 2, y2: 5 },
            { x1: 3, x2: 5, y1: 2, y2: 4 }
        ];
        const { vertical_lines } = filter_lines(data);
        expect(1).toBe(vertical_lines.length);
    });

    test("should be return the least number of two numbers", () => {
        let actual = get_small(2, 3);
        expect(actual).toBe(2);

        actual = get_small(3, 2);
        expect(actual).toBe(2);
    });

    test("should be return result of problem", () => {
        const data: CoordType[] = [
            { x1: 0, x2: 0, y1: 1, y2: 3 },
            { x1: 0, x2: 3, y1: 1, y2: 1 }
        ];
        const actual = step1({ dataParsed: data, maxX: 10, maxY: 10 });
        expect(actual).toBe(1);
    });
});
