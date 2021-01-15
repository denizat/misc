fn main() {
    let mut a = 0;
    let mut b = 1;
    let mut sum = 0;
    while a < 4000000 && b < 4000000 {
        a += b;
        if a % 2 == 0 {
            sum += a
        }
        b += a;
        if b % 2 == 0 {
            sum += b
        }
    }
    print! {"{}",sum};
}
