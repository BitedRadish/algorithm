function solution(input) {
    const [n, k] = input;

    const result = [];
    const bt = (sum, el) => {
        // sum이 n이라면 이후 과정을 진행하지 않고 , 결과에 넣어줌
        if (sum === n) return result.push([...el]);

        for (let i = 1; i <= 3; i++) {
            // n보다 작거나 같을 때 , 다음 depth로 넘어감
            if (sum + i <= n) {
                sum += i;
                el.push(i);
                bt(sum, el);
                el.pop();
                sum -= i;
            }
        }
    };
    bt(0, []);
    result[k - 1] ? console.log(result[k - 1].join("+")) : console.log(-1);
}

const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    solution(line.split(" ").map(Number));
    process.exit();
});
