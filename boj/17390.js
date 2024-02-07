function solution(input) {
    const [N, Q] = input[0];

    const arr = input[1].sort((a, b) => a - b);

    for (let i = 1; i < N; i++) {
        arr[i] += arr[i - 1];
    }

    const ans = [];
    for (let i = 0; i < Q; i++) {
        let [l, r] = input[i + 2];
        l - 1 === 0 ? ans.push(arr[r - 1]) : ans.push(arr[r - 1] - arr[l - 2]);
    }
    console.log(ans.join("\n"));
}

const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});
const input = [];
rl.on("line", (line) => {
    input.push(line.split(" ").map((el) => parseInt(el)));
}).on("close", () => {
    solution(input);
    process.exit();
});
