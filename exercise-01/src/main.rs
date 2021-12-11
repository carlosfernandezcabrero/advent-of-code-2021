use std::fs;

pub fn read_data(path: &str) -> String {
    let contents = fs::read_to_string(path).expect("Something went wrong reading the file");
    contents
}

pub fn parse_data_to_int(data: String) -> Vec<u16> {
    let data: Vec<&str> = data.lines().collect();
    let mut parsed_data = Vec::new();

    for i in data {
        if i.trim().len() > 0 {
            parsed_data.push(i.parse().unwrap())
        }
    }

    parsed_data
}

pub fn step1(input: &Vec<u16>) -> u16 {
    let mut count = 0;

    for (i, el) in input.iter().enumerate() {
        if i != 0 {
            let prev = input[i - 1];
            
            if el > &prev {
                count += 1;
            }
        }
    }

    count
}

pub fn step2(input: &Vec<u16>) -> u16 {
    let mut count = 0;

    for (i, el) in input.iter().enumerate() {
        if i > 0 && i < input.len() - 2 {
            let current = el + input[i + 1] + input[i + 2];
            let prev = input[i - 1] + el + input[i + 1];

            if current > prev {
                count += 1;
            }
        }
    }

    count
}

pub fn main() {
    let path = "./data/input.txt";
    let input = read_data(path);
    let input = parse_data_to_int(input);
    println!("Step 1 {}", step1(&input));
    println!("Step 2 {}", step2(&input));
}
