function* fibbonacci() { 
    let a = 0, // current digit
        b = 1; // next digit

    while(true) {
        yield a; // yield current digit

        // move forward 1 digit
        // 1. Compute new `b`
        // 2. Set `a` to old value of `b`
        [b, a] = [a + b, b]
    }
}

const f = fibbonacci();

f.next().value; // 0
f.next().value; // 1
f.next().value; // 1
f.next().value; // 2
f.next().value; // 3
f.next().value; // 5
f.next().value; // 8
f.next().value; // 13
f.next().value; // 21...