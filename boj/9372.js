function solution(input) {
    const T = +input[0];

    let i = 1;
    let TC = 0;
    let ans = "";
    while (TC < T) {
        const [n, m] = input[i];
        ans += `${n - 1}`;
        if (TC !== T - 1) ans += "\n";

        // 다음 test case와 input index
        i += m + 1;
        TC++;
    }
    console.log(ans);
}

const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
    input.push(line.split(" ").map(Number));
}).on("close", () => {
    solution(input);
    process.exit();
});
