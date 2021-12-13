#[cfg(test)]

mod main_tests {
    use exercise_03::main;

    #[test]
    fn step1_test() {
        let data = vec!["001".to_string(), "010".to_string(), "100".to_string()];
        let actual = main::step1(&data);
        assert_eq!(actual, 0);
    }

    #[test]
    fn step2_test() {
        let data = vec!["001".to_string(), "010".to_string(), "100".to_string()];
        let actual = main::step2(&data);
        assert_eq!(actual, 8);
    }

    #[test]
    fn get_character_test() {
        let data = String::from("ab");
        let actual = main::get_character(&data, 0);
        assert_eq!(actual, 'a');
    }

    #[test]
    fn count_bits_test() {
        let data = vec!["001".to_string(), "011".to_string(), "010".to_string()];
        let actual = main::count_bits(2, &data);
        assert_eq!(actual, [1, 2]);
    }

    #[test]
    fn convert_to_decimal_test() {
        let data = String::from("001");
        let actual = main::convert_to_decimal(data);
        assert_eq!(actual, 1);
    }

    #[test]
    fn calculate_higher_test() {
        let data = [1, 2];
        let actual = main::calculate_higher(data);
        assert_eq!(actual, '1');

        let data = [3, 2];
        let actual = main::calculate_higher(data);
        assert_eq!(actual, '0');
    }

    #[test]
    fn calculate_small_test() {
        let data = [2, 1];
        let actual = main::calculate_small(data);
        assert_eq!(actual, '1');

        let data = [1, 2];
        let actual = main::calculate_small(data);
        assert_eq!(actual, '0');
    }

    #[test]
    fn calculate_higher_equal_test() {
        let data = [1, 1];
        let actual = main::calculate_higher(data);
        assert_eq!(actual, '1');
    }

    #[test]
    fn calculate_small_equal_test() {
        let data = [1, 1];
        let actual = main::calculate_small(data);
        assert_eq!(actual, '0');
    }
}
