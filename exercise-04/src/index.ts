import fs from "fs";
import { step1 } from "./step1";
import { step2 } from "./step2";

function write_results(step1: number, step2: number) {
    const flag = {
        flag: "a",
    };
    fs.writeFileSync(`${__dirname}/results.txt`, "");
    fs.writeFileSync(`${__dirname}/results.txt`, `Step 1 : ${step1}\n`, flag);
    fs.writeFileSync(`${__dirname}/results.txt`, `Step 2 : ${step2}\n`, flag);
}

write_results(step1(), step2());
