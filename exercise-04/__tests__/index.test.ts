import { read_data } from "../src";

describe("index file tests", () => {
    test("should be return 27 numbers", () => {
        const { numbers } = read_data("./data/input2.txt");
        expect(numbers.length).toBe(27);
    });

    test("should be return 3 tables ", () => {
        const { tables } = read_data("./data/input2.txt");
        expect(tables.length).toBe(3);
    });

    test("should be return 5 rows in each table", () => {
        const { tables } = read_data("./data/input2.txt");
        expect(tables.every((e) => e.table.length === 5)).toBeTruthy();
    });
});
