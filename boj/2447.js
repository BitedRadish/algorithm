function solution(input) {
    const n = input;
    let str = "";

    const makeStar = (r, c, n) => {
        if (Math.floor(r / n) % 3 === 1 && Math.floor(c / n) % 3 === 1)
            str += " ";
        else {
            if (Math.floor(n / 3) === 0) {
                str += "*";
                return;
            } else {
                makeStar(r, c, n / 3);
            }
        }
    };

    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            makeStar(r, c, n / 3);
        }
        str += "\n";
    }
    console.log(str);
}

const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    solution(parseInt(line));
    process.exit();
});
