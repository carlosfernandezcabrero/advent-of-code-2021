import { read_data } from "../../src/common";
import {
    draw_diagonal_lines,
    filter_lines,
    get_small_y_set,
    step2
} from "../../src/step2";
import { CoordType } from "../../src/types";

describe("Step2 tests", () => {
    test("should be return horizontal lines", () => {
        const data: CoordType[] = [
            { x1: 1, x2: 5, y1: 2, y2: 2 },
            { x1: 3, x2: 5, y1: 2, y2: 4 }
        ];
        const { horizontal_lines } = filter_lines(data);
        expect(1).toBe(horizontal_lines.length);
    });

    test("should be return vertical lines", () => {
        const data: CoordType[] = [
            { x1: 5, x2: 5, y1: 7, y2: 2 },
            { x1: 3, x2: 5, y1: 2, y2: 4 }
        ];
        const { vertical_lines } = filter_lines(data);
        expect(1).toBe(vertical_lines.length);
    });

    test("should be return lines with 45 degrees", () => {
        const data: CoordType[] = [
            { x1: 3, x2: 5, y1: 2, y2: 4 },
            { x1: 0, y1: 0, x2: 8, y2: 8 }
        ];
        const { diagonal_lines } = filter_lines(data);
        expect(2).toBe(diagonal_lines.length);
    });

    test("should be return set of coords with small y", () => {
        const data: CoordType = { y2: 3, x2: 2, y1: 1, x1: 2 };
        const actual = get_small_y_set(data);
        expect(actual).toStrictEqual({ y: 1, x: 2 });
    });

    test("should be draw diagonal line", () => {
        const coords: CoordType[] = [{ x1: 2, y1: 0, x2: 0, y2: 2 }];
        const diagram = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];
        const expected = [
            [0, 0, 1],
            [0, 1, 0],
            [1, 0, 0]
        ];
        draw_diagonal_lines(coords, diagram);
        expect(diagram).toStrictEqual(expected);
    });

    test("should be return 18674 for input.txt", () => {
        const data = read_data("data/input.txt");
        const actual = step2(data);
        expect(actual).toBe(18674);
    });
});
