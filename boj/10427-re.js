function solution(input) {
    const T = input.shift();

    for (let i = 0; i < T; i++) {
        const N = input[i].shift();
        const debt = input[i].sort((a, b) => a - b);

        const result = minTable(N, debt);
        console.log(result);
    }
}

function minTable(N, debt) {
    const minimumArr = [];
    // [1,3,4,5,8]
    // M=1 일 때 , 어차피 0이니까 배열 인덱스 기준으로 i=1 (M=2)부터 시작
    for (let i = 1; i < N; i++) {
        let arr = [];
        for (let j = i; j < debt.length; j++) {
            let max = debt[j];
            let sum = 0;
            for (let k = j - i; k <= j - 1; k++) {
                sum += debt[k];
            }
            let plus = max * (i + 1) - (max + sum);
            arr.push(plus);
        }
        minimumArr.push(Math.min(...arr));
    }

    return minimumArr.reduce((acc, val) => acc + val, 0);
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
