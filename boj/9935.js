function solution(input) {
    let str = input[0];
    const bomb = input[1];
    const bomLen = bomb.length;
    const stack = [];
    let top;

    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
        top = str[i];

        // 끝 부분과 같다면
        if (top === bomb[bomLen - 1]) {
            const last = stack.slice(-bomLen);
            if (last.join("") === bomb) stack.splice(-bomLen);
        }
    }
    stack.length ? console.log(stack.join("")) : console.log("FRULA");
}

const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
    input.push(line);
}).on("close", () => {
    solution(input);
    process.exit();
});

// 실패 코드
// function solution(input) {
//     let str = input[0];
//     const bomb = input[1];

//     const answer = [str];
//     let idx = 0;
//     while (answer[idx].includes(bomb)) {
//         answer.push(answer[idx].split(bomb).join(""));
//         answer.shift();
//     }
//     answer[idx] !== "" ? console.log(answer[idx]) : console.log("FRULA");
// }

// const rl = require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// const input = [];
// rl.on("line", (line) => {
//     input.push(line);
// }).on("close", () => {
//     solution(input);
//     process.exit();
// });
