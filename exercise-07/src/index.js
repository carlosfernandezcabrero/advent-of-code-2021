import { log } from "console";

const input = require("fs")
    .readFileSync("data/input.txt", "utf-8")
    .split("\n")[0]
    .split(",")
    .map(Number);

const max = Math.max(...input);
const min = Math.min(...input);

function step1() {
    let lowerConsumption = [-1, Number.MAX_VALUE];

    for (let num = min; num <= max; num++) {
        const fuel = input.reduce(
            (sum, value) => sum + Math.abs(value - num),
            0
        );

        if (fuel < lowerConsumption[1]) {
            lowerConsumption[0] = num;
            lowerConsumption[1] = fuel;
        }
    }

    log(`Step 1 ${lowerConsumption[1]}`);
}

step1();

function step2() {
    let lowerConsumption = [-1, Number.MAX_VALUE];

    for (let num = min; num <= max; num++) {
        const fuel = input.reduce((sum, value) => {
            const diff = Math.abs(value - num);
            let crabFuel = diff;

            for (let factor = 0; factor < diff; factor++) {
                crabFuel += factor;
            }

            return sum + crabFuel;
        }, 0);

        if (fuel < lowerConsumption[1]) {
            lowerConsumption[0] = num;
            lowerConsumption[1] = fuel;
        }
    }

    log(`Step 2 ${lowerConsumption[1]}`);
}

step2();
