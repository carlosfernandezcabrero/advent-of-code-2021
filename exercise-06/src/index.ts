import { log } from "console";
import clone from "just-clone";

const daysOldFish = 6;
const daysNewFish = 8;

let data: Record<string, number> = {};
for (let i = 0; i <= daysNewFish; i++) {
    data = { ...data, [i.toString()]: 0 };
}

const data_filled = { ...data };
require("fs")
    .readFileSync("data/input.txt", "utf-8")
    .split("\n")[0]
    .split(",")
    .forEach((e: string) => {
        data_filled[e] += 1;
    });

function calculate_lanternfishes(days: number) {
    let initial_data = { ...data_filled };

    const daysNewFish_string = daysNewFish.toString();
    const daysOldFish_string = daysOldFish.toString();

    for (let i = 0; i < days; i++) {
        const current_data = { ...data };

        for (let z = daysNewFish; z >= 0; z--) {
            const z_string = z.toString();

            switch (z) {
                case 0:
                    current_data[daysNewFish_string] += initial_data[z_string];
                    current_data[daysOldFish_string] += initial_data[z_string];
                    break;
                default:
                    current_data[(z - 1).toString()] = initial_data[z_string];
                    break;
            }
        }
        initial_data = clone(current_data);
    }

    let sum = 0;
    for (let x = 0; x < Object.keys(initial_data).length; x++) {
        sum += initial_data[x];
    }
    log(`${days} ${sum}`);
}

calculate_lanternfishes(80);
calculate_lanternfishes(256);
