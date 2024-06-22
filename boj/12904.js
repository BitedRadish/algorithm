function solution(input) {
    const s = input[0];
    let t = input[1];

    // 1. 문자열의 뒤에 A 빼기
    // 2. 문자열 B를 빼고 문자열 뒤집기
    // 어떨 때 1번을 써야 하고 2번을 써야 할까
    // 재귀 갈겨야 될 것 같은데
    while (t.length >= 1 && t !== s) {
        if (t[t.length - 1] === "A") {
            t = t.split("");
            t.pop();
            t = t.join("");
        } else if (t[t.length - 1] === "B") {
            t = t.split("");
            t.pop();
            t = t.reverse().join("");
        }

        if (t[t.length - 1] !== "A" && t[t.length - 1] !== "B")
            return console.log(0);

        if (s === t) return console.log(1);
    }
    return console.log(1);
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
