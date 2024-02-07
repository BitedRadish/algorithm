function solution(input) {
    const n = input;
    function fibo(n) {
        if (n <= 1) {
            return 1;
        }
        return fibo(n - 1) + fibo(n - 2);
    }
    const result = fibo(n - 1);
    console.log(result);
}

const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    solution(line);
    process.exit();
});
