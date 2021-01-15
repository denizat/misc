// BROKEN

fn is_pal(s: String) -> bool {
    for i in 0..s.chars().count() {
        if s.as_bytes()[i] != s.as_bytes()[s.chars().count() - i] {
            return false;
        }
    }
    return true;
}

fn main() {
    let mut c: i32 = 0;
    for i in 100..999 {
        for k in 100..999 {
            if is_pal((i * k).to_string()) && i * k > c {
                c = i * k;
            }
        }
    }
    print!("{}", c);
}
