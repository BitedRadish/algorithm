function solution(input) {
    const [l, c] = input[0].map((el) => parseInt(el));
    const arr = input[1].sort();

    // 입력 값중 모음만
    const vArr = [];
    // 입력 값중 자음만
    const cArr = [];

    const vowel = ["a", "e", "i", "o", "u"];

    arr.forEach((el) => {
        if (vowel.includes(el)) {
            vArr.push(el);
        } else {
            cArr.push(el);
        }
    });

    const result = [];
    const temp = [];
    const cDfs = (idx, depth) => {
        if (depth === l - 1) {
            let len = temp.length;
            vDfs(0, 0, len);
        }
        for (let i = idx; i < cArr.length; i++) {
            temp.push(cArr[i]);
            cDfs(i + 1, depth + 1);
            temp.pop();
        }
    };

    const vDfs = (idx, depth, len) => {
        if (depth === l - len) {
            result.push(temp.join(""));
            return;
        }

        for (let i = idx; i < vArr.length; i++) {
            temp.push(vArr[i]);
            vDfs(i + 1, depth + 1, len);
            temp.pop();
        }
    };

    for (let i = 0; i < l - 2; i++) {
        cDfs(0, i);
    }
    console.log(
        result
            .map((el) => el.split("").sort().join(""))
            .sort()
            .join("\n")
    );
}

const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
    input.push(line.split(" "));
}).on("close", () => {
    solution(input);
    process.exit();
});
