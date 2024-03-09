// - 를 기준으로 앞 뒤 봐야 됨
function solution(input) {
    const divideM = input
        .split("-")
        .map((el) => el.split("+").reduce((acc, val) => acc + parseInt(val), 0))
        .reduce((acc, val) => acc - val);

    console.log(divideM);
}

const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    solution(line);
    process.exit();
});
