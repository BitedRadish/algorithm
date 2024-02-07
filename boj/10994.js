function solution(input) {
    const n = input;
    // 큰 거에서 작은거로
    const size = 4 * n - 3;
    const str = Array(size)
        .fill(0)
        .map(() => Array(size).fill(" "));
    function makeStar(n, x = 0, y = 0) {
        if (n === 0) return;
        const sectionSize = 4 * n - 3;
        let initY = y;

        while (initY < y + sectionSize) {
            if (initY === y || initY === y + sectionSize - 1) {
                for (let i = x; i < x + sectionSize; i++) {
                    str[initY][i] = "*";
                }
            } else {
                str[initY][x] = "*";
                str[initY][x + sectionSize - 1] = "*";
            }
            initY++;
        }

        makeStar(n - 1, x + 2, y + 2);
    }
    makeStar(n);
    console.log(str.map((el) => el.join("")).join("\n"));
}

const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    solution(parseInt(line));
    process.exit();
});
