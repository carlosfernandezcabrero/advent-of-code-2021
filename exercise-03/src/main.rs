use std::fs;

pub fn get_character(word: &String, index: usize) -> char {
    let character = word.chars().nth(index).unwrap();
    character
}

pub fn count_bits(index: usize, data: &Vec<String>) -> [u16; 2] {
    let mut response = [0; 2];

    for (_x, z) in data.iter().enumerate() {
        let character = get_character(z, index);
        let num: usize = character.to_digit(10).unwrap() as usize;
        response[num] += 1;
    }

    response
}

fn read_data() -> Vec<String> {
    let contents =
        fs::read_to_string("./data/input2.txt").expect("Something went wrong reading the file");
    let mut data = Vec::new();

    for i in contents.lines() {
        if i.trim().len() > 0 {
            let l = i.to_string();
            data.push(l);
        }
    }

    data
}

pub fn convert_to_decimal(binary: String) -> u32 {
    let decimal = u32::from_str_radix(&binary, 2).unwrap();
    decimal
}

pub fn calculate_higher(set: [u16; 2]) -> char {
    let mut res = '0';
    if set[1] > set[0] {
        res = '1';
    }
    if set[1] == set[0] {
        res = '1';
    }
    res
}

pub fn calculate_small(set: [u16; 2]) -> char {
    let mut res = '0';
    if set[0] > set[1] {
        res = '1';
    }
    if set[1] == set[0] {
        res = '0';
    }
    res
}

pub fn step1(input: &Vec<String>) -> u32 {
    let columns = input[0].to_string().len();
    let mut result = vec![[0; 2]; columns];

    for i in 0..columns {
        result[i] = count_bits(i, &input);
    }

    let mut gamma_rate_string = String::new();
    let mut epsilon_rate_string = String::new();
    let zero = "0";
    let one = "1";

    for i in result {
        if i[0] > i[1] {
            gamma_rate_string.push_str(zero);
            epsilon_rate_string.push_str(one);
        }
        if i[0] < i[1] {
            epsilon_rate_string.push_str(zero);
            gamma_rate_string.push_str(one);
        }
    }

    let power_consumption =
        convert_to_decimal(gamma_rate_string) * convert_to_decimal(epsilon_rate_string);

    power_consumption
}

pub fn step2(input: &Vec<String>) -> u32 {
    let mut oxygen_rating = input.clone();
    let mut co2_rating = input.clone();
    let columns = input[0].to_string().len();

    for i in 0..columns {
        if oxygen_rating.len() > 1 {
            let set = count_bits(i, &oxygen_rating);
            oxygen_rating.retain(|xo| get_character(xo, i) == calculate_higher(set));
        }
        if co2_rating.len() > 1 {
            let set = count_bits(i, &co2_rating);
            co2_rating.retain(|xc| get_character(xc, i) == calculate_small(set));
        }
    }

    let co2_string = String::from(&co2_rating[0]);
    let oxygen_string = String::from(&oxygen_rating[0]);
    let life_support = convert_to_decimal(co2_string) * convert_to_decimal(oxygen_string);

    life_support
}

pub fn main() {
    let data = read_data();

    println!("Step 1 {}", step1(&data));
    println!("Step 2 {}", step2(&data));
}
