function solution(input) {
    const exp = input.split("");

    const left = [];
    const pairs = [];
    for (let i = 0; i < exp.length; i++) {
        if (exp[i] === "(") {
            left.push(i);
        } else if (exp[i] === ")") {
            pairs.push([left.pop(), i]);
        }
    }

    const tempResult = new Set();

    for (let i = 1; i <= 2 ** pairs.length - 1; i++) {
        const expCopy = exp.slice();
        const t = i.toString(2).padStart(pairs.length, "0").split("");
        for (let j = 0; j < t.length; j++) {
            if (t[j] === "1") {
                const [l, r] = pairs[j];
                expCopy.splice(l, 1, "");
                expCopy.splice(r, 1, "");
            }
        }
        tempResult.add(expCopy.join(""));
    }
    const result = [...tempResult].sort().join("\n");
    console.log(result);
}

const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    solution(line);
    process.exit();
});
