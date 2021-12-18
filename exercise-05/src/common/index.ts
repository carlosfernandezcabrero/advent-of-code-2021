import { readFileSync } from "fs";
import { get_small } from "../step1";
import { CoordType } from "../types";

export function read_data(path: string) {
    let maxX = 0;
    let maxY = 0;

    const data = readFileSync(path, "utf-8").split("\n");

    const dataParsed = Array.from(data, (e) => {
        const coords = e.replace(" -> ", ",").split(",");
        const objCoords = {
            x1: parseInt(coords[0]),
            y1: parseInt(coords[1]),
            x2: parseInt(coords[2]),
            y2: parseInt(coords[3])
        };

        if (objCoords.x1 > maxX) maxX = objCoords.x1;
        if (objCoords.x2 > maxX) maxX = objCoords.x2;
        if (objCoords.y1 > maxY) maxY = objCoords.y1;
        if (objCoords.y2 > maxY) maxY = objCoords.y2;

        return objCoords;
    });

    return { dataParsed, maxX: maxX + 1, maxY: maxY + 1 };
}

export const draw_horizontal_lines = (
    lines: CoordType[],
    diagram: number[][]
) => {
    for (const { x1, x2, y1 } of lines) {
        const distance = Math.abs(x1 - x2);
        const hs = get_small(x1, x2);

        for (let z = hs; z <= distance + hs; z++) {
            diagram[y1][z] += 1;
        }
    }
};

export const draw_vertical_lines = (
    lines: CoordType[],
    diagram: number[][]
) => {
    for (const { y1, y2, x1 } of lines) {
        const distance = Math.abs(y1 - y2);
        const vs = get_small(y1, y2);

        for (let z = vs; z <= distance + vs; z++) {
            diagram[z][x1] += 1;
        }
    }
};

export const create_diagram = (maxY: number, maxX: number) =>
    [...Array(maxY).keys()].map(() => [...Array(maxX).keys()].map(() => 0));
