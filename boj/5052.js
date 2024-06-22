function solution(input) {
    const T = +input[0];

    let tc = 0;
    let idx = 1;
    while (tc < T) {
        const n = +input[idx];
        const book = input.slice(idx + 1, idx + n + 1).sort();

        console.log(book);

        let isConsist = true;

        for (let i = 0; i < book.length - 1; i++) {
            const cur = book[i];
            const next = book[i + 1].slice(0, cur.length);

            if (cur === next) {
                isConsist = false;
                break;
            }
        }
        console.log(isConsist ? "YES" : "NO");
        tc++;
        idx += n + 1;
    }
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
