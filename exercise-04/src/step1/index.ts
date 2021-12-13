import { check_table, read_data } from "..";

export function step1() {
    const { tables, numbers } = read_data("./data/input.txt");

    for (const num of numbers) {
        for (const { table } of tables) {
            for (const row of table) {
                const match = row.findIndex((e) => e === num);
                if (match != -1) row[match] *= -1;
            }
            if (check_table(table)) {
                const sum = get_sum_unmarked(table);
                return sum * num;
            }
        }
    }
}

export function get_sum_unmarked(table: number[][]) {
    let sum = 0;
    table.forEach((row) => {
        row.forEach((num) => {
            if (num >= 0) sum += num;
        });
    });
    return sum;
}
