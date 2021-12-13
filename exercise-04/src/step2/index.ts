import { check_table, read_data } from "..";

type WinTablesType = {
    table: string[];
    num: number;
};

export function step2() {
    const win_tables: WinTablesType[] = [];
    const { tables, numbers } = read_data("./data/input.txt");

    numbers.forEach((num) => {
        for (let tableType = 0; tableType < tables.length; tableType++) {
            if (!tables[tableType].isWinner) {
                for (let row = 0; row < tables[tableType].table.length; row++) {
                    const match = tables[tableType].table[row].findIndex(
                        (e) => e === num
                    );
                    if (match != -1) tables[tableType].table[row][match] *= -1;
                }
                if (check_table(tables[tableType].table)) {
                    win_tables.push({
                        table: tables[tableType].table.map((e) => e.join(",")),
                        num,
                    });
                    tables[tableType] = {
                        ...tables[tableType],
                        isWinner: true,
                    };
                }
            }
        }
    });

    const { table, num } = win_tables[win_tables.length - 1];
    return get_sum_unmarked(table) * num;
}

function get_sum_unmarked(table: string[]): number {
    let sum = 0;
    table.forEach((row) => {
        row.split(",").forEach((num) => {
            const num_int = parseInt(num);
            if (num_int >= 0) sum += num_int;
        });
    });
    return sum;
}
