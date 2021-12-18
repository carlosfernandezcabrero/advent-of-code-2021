import { join } from "path";
import {
    create_diagram,
    draw_horizontal_lines,
    draw_vertical_lines,
    read_data
} from "../../src/common";
import { CoordType } from "../../src/types";

describe("Common functions test", () => {
    test("should be return 10 lines", () => {
        const path = join(__dirname, "../../data/input2.txt");
        const { dataParsed, maxX, maxY } = read_data(path);

        expect(dataParsed.length).toBe(10);
        expect(maxX).toBe(10);
        expect(maxY).toBe(10);
    });

    test("should be print horizontal line", () => {
        const diagram = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];
        const expected = [
            [0, 0, 0],
            [0, 1, 1],
            [0, 0, 0]
        ];
        const coords: CoordType[] = [{ y1: 1, y2: 1, x1: 1, x2: 2 }];
        draw_horizontal_lines(coords, diagram);
        expect(diagram).toStrictEqual(expected);
    });

    test("should be print vertical line", () => {
        const diagram = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];
        const expected = [
            [0, 0, 0],
            [0, 0, 1],
            [0, 0, 1]
        ];
        const coords: CoordType[] = [{ y1: 1, y2: 2, x1: 2, x2: 2 }];
        draw_vertical_lines(coords, diagram);
        expect(diagram).toStrictEqual(expected);
    });

    test("should be return a 4x4 diagram filled with 0", () => {
        const expected = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ];
        const actual = create_diagram(4, 4);
        expect(actual).toStrictEqual(expected);
    });
});
