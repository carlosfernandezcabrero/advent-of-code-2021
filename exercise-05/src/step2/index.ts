import {
    create_diagram,
    draw_horizontal_lines,
    draw_vertical_lines
} from "../common";
import { CoordType } from "../types";

export const filter_lines = (lines: CoordType[]) => {
    const horizontal_lines = lines.filter(({ y1, y2 }) => y1 === y2);
    const vertical_lines = lines.filter(({ x1, x2 }) => x1 === x2);
    const diagonal_lines = lines.filter(
        ({ x1, y2, x2, y1 }) =>
            x1 === y2 || x2 === y1 || Math.abs(x1 - x2) === Math.abs(y1 - y2)
    );
    return { horizontal_lines, vertical_lines, diagonal_lines };
};

export const get_small_y_set = ({ x2, x1, y2, y1 }: CoordType) => {
    return y1 > y2 ? { y: y2, x: x2 } : { y: y1, x: x1 };
};

export const draw_diagonal_lines = (
    coords: CoordType[],
    diagram: number[][]
) => {
    coords.forEach(({ x1, x2, y1, y2 }) => {
        const yd = Math.abs(y1 - y2);

        if (x1 === y1) {
            const { y, x } = get_small_y_set({ x1, x2, y1, y2 });
            for (let i = y, z = x; i <= y + yd; i++, z++) {
                diagram[i][z] += 1;
            }
        }

        if (y1 > y2 && x1 < x2) {
            for (let i = y2, z = x2; i <= y2 + yd; i++, z--) {
                diagram[i][z] += 1;
            }
        }

        if (y2 > y1 && x2 < x1) {
            for (let i = y1, z = x1; i <= y1 + yd; i++, z--) {
                diagram[i][z] += 1;
            }
        }

        if (y2 > y1 && x2 > x1) {
            for (let i = y1, z = x1; i <= y1 + yd; i++, z++) {
                diagram[i][z] += 1;
            }
        }

        if (y1 > y2 && x1 > x2) {
            for (let i = y2, z = x2; i <= y2 + yd; i++, z++) {
                diagram[i][z] += 1;
            }
        }
    });
};

type StepPropsType = {
    dataParsed: CoordType[];
    maxX: number;
    maxY: number;
};
export const step2 = ({ dataParsed, maxX, maxY }: StepPropsType) => {
    const { horizontal_lines, vertical_lines, diagonal_lines } =
        filter_lines(dataParsed);
    const diagram = create_diagram(maxY, maxX);

    draw_horizontal_lines(horizontal_lines, diagram);
    draw_vertical_lines(vertical_lines, diagram);
    draw_diagonal_lines(diagonal_lines, diagram);

    let sum = 0;
    diagram.forEach((e) => {
        sum += e.filter((e) => e > 1).length;
    });

    return sum;
};
