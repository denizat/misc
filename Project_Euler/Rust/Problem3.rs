use std::f64;
fn is_prime(n: i64) -> bool {
    if n % 2 == 0 {
        return false;
    }
    for i in (3..((n as f64).sqrt() as i64)).step_by(2) {
        if n % i == 0 {
            return false;
        }
    }
    return true;
}
fn main() {
    let max: i64 = 600851475143;
    let mut largest = 0;
    for i in (1..((max as f64).sqrt() as i64)).step_by(2) {
        if max % i == 0 && is_prime(i) {
            largest = i;
        }
    }
    print!("{}", largest);
}
