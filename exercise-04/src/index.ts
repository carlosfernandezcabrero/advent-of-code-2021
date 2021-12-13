import fs from "fs";
import { step1 } from "./step1";
import { step2 } from "./step2";
import { TableType } from "./types";

export function read_data(path: string) {
    const data = fs
        .readFileSync(path, "utf-8")
        .split("\n\n")
        .filter((e) => e.trim().length);
    const numbers = data[0]
        .trim()
        .split(",")
        .map((e) => parseInt(e));
    const tables: TableType[] = [];

    for (let i = 1; i < data.length; i++) {
        const table: number[][] = [];

        data[i]
            .split("\n")
            .filter((e) => e.trim().length)
            .forEach((e) => {
                table.push(
                    e
                        .trim()
                        .replace(/\s\s+/g, " ")
                        .split(" ")
                        .map((n) => parseInt(n))
                );
            });
        tables.push({ table, isWinner: false });
    }

    return { numbers, tables };
}

export function check_table(table: number[][]) {
    for (let i = 0; i < 5; i++) {
        let bingo = true;
        if (table[i].every((e) => e < 0)) return true;
        for (let z = 0; z < 5; z++) {
            if (table[z][i] >= 0) {
                bingo = false;
                break;
            }
        }
        if (bingo) return bingo;
    }
    return false;
}

const res_step1 = () => step1();
const res_step2 = () => step2();

//console.log(`Step 1 ${res_step1()}`);
//console.log(`Step 2 ${res_step2()}`);
