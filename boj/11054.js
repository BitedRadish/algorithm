function solution(input) {
    const n = +input[0];
    const arr = [0, ...input[1]];
    // 결과
    const increaseDp = [0];
    // 가장 긴 증가하는 부분 수열
    for (let i = 1; i <= n; i++) {
        let max = 0;
        for (let j = 1; j <= i; j++) {
            if (arr[i] > arr[j] && increaseDp[j] > max) {
                max = increaseDp[j];
            }
        }
        increaseDp[i] = max + 1;
    }

    const decreaseDp = [0];
    for (let i = n; i >= 1; i--) {
        let max = 0;
        for (let j = i + 1; j <= n; j++) {
            if (arr[i] > arr[j] && decreaseDp[j] > max) {
                max = decreaseDp[j];
            }
        }
        decreaseDp[i] = max + 1;
    }

    const dp = increaseDp.map((el, idx) => el + decreaseDp[idx]);
    console.log(Math.max(...dp) - 1);
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
