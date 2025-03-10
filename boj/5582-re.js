function solution(input) {
    const str1 = input[0];
    const str2 = input[1];

    const memo = Array.from({ length: str1.length + 1 }, () =>
        Array(str2.length + 1).fill(0)
    );
    let max = 0;

    for (let i = 1; i <= str1.length; i++) {
        for (let j = 1; j <= str2.length; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                memo[i][j] = memo[i - 1][j - 1] + 1;
                max = Math.max(max, memo[i][j]);
            }
        }
    }
    console.log(max);
}

const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
    input.push(line.split(""));
}).on("close", () => {
    solution(input);
    process.exit();
});
