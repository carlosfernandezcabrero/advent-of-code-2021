import {
    create_diagram,
    draw_horizontal_lines,
    draw_vertical_lines
} from "../common";
import { CoordType } from "../types";

export const filter_lines = (lines: CoordType[]) => {
    const horizontal_lines = lines.filter(({ y1, y2 }) => y1 === y2);
    const vertical_lines = lines.filter(({ x1, x2 }) => x1 === x2);
    return { horizontal_lines, vertical_lines };
};

export const get_small = (num1: number, num2: number) =>
    num1 < num2 ? num1 : num2;

type Step1PropsType = {
    dataParsed: CoordType[];
    maxX: number;
    maxY: number;
};
export function step1({ dataParsed, maxX, maxY }: Step1PropsType) {
    const { horizontal_lines, vertical_lines } = filter_lines(dataParsed);
    const diagram = create_diagram(maxY, maxX);

    draw_horizontal_lines(horizontal_lines, diagram);
    draw_vertical_lines(vertical_lines, diagram);

    let sum = 0;
    diagram.forEach((z) => {
        sum += z.filter((e) => e > 1).length;
    });

    return sum;
}
