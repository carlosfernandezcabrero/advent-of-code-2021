#[cfg(test)]
mod main_tests {
    use exercise_01::main;

    #[test]
    fn step1_small_array() {
        let data: Vec<u16> = [1].to_vec();

        let actual = main::step1(&data);
        assert_eq!(actual, 0)
    }

    #[test]
    fn step2_small_array() {
        let data: Vec<u16> = [1].to_vec();

        let actual = main::step2(&data);
        assert_eq!(actual, 0)
    }

    #[test]
    fn step1() {
        let data: Vec<u16> = [1, 2, 0].to_vec();

        let actual = main::step1(&data);
        assert_eq!(actual, 1)
    }
    #[test]

    fn step2() {
        let data: Vec<u16> = [1, 4, 1, 2, 3].to_vec();

        let actual = main::step2(&data);
        assert_eq!(actual, 1)
    }
}
