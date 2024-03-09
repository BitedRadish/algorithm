function solution(input) {
    const n = +input[0];

    const pos = [];
    const neg = [];

    for (let i = 0; i < n; i++) {
        if (+input[1 + i] > 0) {
            pos.push(+input[i + 1]);
        } else {
            neg.push(+input[i + 1]);
        }
    }
    pos.sort((a, b) => b - a);
    neg.sort((a, b) => a - b);
    // const pos = numArr.filter((el) => el > 0).sort((a, b) => b - a);
    // const neg = numArr.filter((el) => el <= 0).sort((a, b) => a - b);
    const newSort = pos.concat(neg);

    let res = 0;

    for (let i = 0; i < newSort.length; i++) {
        const mul = newSort[i] * newSort[i + 1];
        const sum = newSort[i] + newSort[i + 1];

        if (mul > sum) {
            i += 1;
            res += mul;
        } else {
            res += newSort[i];
        }
    }
    console.log(res);
}

const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
    input.push(parseInt(line));
}).on("close", () => {
    solution(input);
    process.exit();
});
