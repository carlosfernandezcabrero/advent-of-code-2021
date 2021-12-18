import clone from "just-clone";
import { join } from "path";
import { read_data } from "./common";
import { step1 } from "./step1";
import { step2 } from "./step2";

const path = join(__dirname, "../data/input.txt");
const data = read_data(path);

const rs_step1 = step1(clone(data));
const rs_step2 = step2(clone(data));

console.log(`Step 1 ${rs_step1}`);
console.log(`Step 2 ${rs_step2}`);
