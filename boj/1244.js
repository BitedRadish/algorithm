function solution(input) {
    const cnt = +input[0][0];
    const switchArr = input[1];
    const n = +input[2];

    const maleSwitch = (assign) => {
        for (let i = assign; i <= switchArr.length; i += assign) {
            switchArr[i - 1] === 1
                ? (switchArr[i - 1] = 0)
                : (switchArr[i - 1] = 1);
        }
    };
    const femaleSwitch = (assign) => {
        const cur = assign - 1;

        switchArr[cur] === 1 ? (switchArr[cur] = 0) : (switchArr[cur] = 1);

        let idx = 1;
        while (
            cur - idx >= 0 &&
            cur + idx <= switchArr.length - 1 &&
            switchArr[cur - idx] === switchArr[cur + idx]
        ) {
            switchArr[cur - idx] === 1
                ? (switchArr[cur - idx] = 0)
                : (switchArr[cur - idx] = 1);
            switchArr[cur + idx] === 1
                ? (switchArr[cur + idx] = 0)
                : (switchArr[cur + idx] = 1);
            ++idx;
        }
    };

    for (let i = 0; i < n; i++) {
        const [gender, assign] = input[3 + i];
        gender === 1 ? maleSwitch(assign) : femaleSwitch(assign);
    }

    // 결과 출력
    let result = [];
    while (switchArr.length > 0) {
        result.push(switchArr.splice(0, 20).join(" "));
    }
    console.log(result.join("\n"));
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
