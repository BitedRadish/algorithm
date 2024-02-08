function solution(input) {
    const [a, p] = input[0];
    const stack = [a];
    const p1 = parseInt(p);
    let flag = true;
    let i = 0;

    while (flag) {
        const arr = stack[i].split("").map((el) => parseInt(el));
        const sum = arr.reduce((acc, cur) => acc + cur ** p1, 0);

        if (stack.includes(sum.toString())) flag = false;
        stack.push(sum.toString());
        ++i;
    }
    const cnt = stack.indexOf(stack.pop());
    console.log(cnt);
}

const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});
const input = [];
rl.on("line", (line) => {
    input.push(line.split(" "));
    solution(input);
    process.exit();
});
