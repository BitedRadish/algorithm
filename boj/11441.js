function solution(input) {
    const n = input[0][0];
    const arr = input[1];
    const count = input[2][0];

    const ans = [];

    // 인덱스 0부터 1까지의 합 , 0부터 2까지의 합 , ... , 0부터 arr.length-1 까지의 합
    // 미리 구해둔 배열 구현

    const preSum = [arr[0]];

    for (let i = 1; i < arr.length; i++) {
        preSum[i] = preSum[i - 1] + arr[i];
    }

    // i부터 j까지의 합은 , 인덱스 0부터 j까지의 합 - 0부터 i-1까지의 합
    for (let t = 0; t < count; t++) {
        const i = input[t + 3][0] - 1;
        const j = input[t + 3][1] - 1;

        const sum = i === 0 ? preSum[j] : preSum[j] - preSum[i - 1];

        ans.push(sum);
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
}).on("close", function () {
    solution(input);
    process.exit();
});
