function solution(input) {
    const exp = input.split("");
    console.log(exp);

    const leftArr = [];
    const rightArr = [];

    for (let i = 0; i < exp.length; i++) {
        if (exp[i] === "(") {
            leftArr.push(i);
        } else if (exp[i] === ")") {
            rightArr.push(i);
        }
    }
    const pairs = [];
    for (let i = 0; i < leftArr.length; i++) {
        const pair = [leftArr[i], rightArr[rightArr.length - 1 - i]];
        pairs.push(pair);
    }

    const result = [];

    const removeBracket = (start, idx) => {
        removeBracket(start - 1, start);
    };
    removeBracket(pairs.length - 1, pairs.length - 1);
}

const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});
const months = ["Jan", "March", "April", "June"];
months.splice(1, 1);
console.log(months);
rl.on("line", (line) => {
    solution(line);
    process.exit();
});
// const makeCase = (start,idx) => {
//     if (idx < 0) return;
//     let expCopy = exp.slice();
//     const [lIdx, rIdx] = pairs[idx];
//     expCopy.splice(lIdx, 1);
//     expCopy.splice(rIdx, 1);
//     result.push(expCopy);

//     makeCase(idx - 1);
// };
//let visited = Array(pairs.length).fill(0);
// console.log(visited);
