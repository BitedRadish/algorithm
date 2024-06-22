function solution(input) {
    const T = +input[0];

    let idx = 1;
    let tc = 0;

    const answer = [];

    while (tc < T) {
        const funcArr = input[idx];
        const n = +input[idx + 1];
        const arr = JSON.parse(input[idx + 2]);
        let reverse = false;
        let error = false;
        let [start, finish] = [0, n - 1];

        for (let i = 0; i < funcArr.length; i++) {
            const f = funcArr[i];

            if (f === "D") {
                if (start > finish) {
                    error = true;
                    break;
                }
                reverse ? (finish -= 1) : (start += 1);
            } else {
                reverse = !reverse;
            }
        }

        const tcArr = arr.slice(start, finish + 1);

        answer.push(
            error ? "error" : JSON.stringify(reverse ? tcArr.reverse() : tcArr)
        );
        idx += 3;
        tc++;
    }
    console.log(answer.join("\n"));
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
