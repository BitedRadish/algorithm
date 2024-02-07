const solution = (input) => {
    const [h, w] = input[0];
    const arr = input[1];
    let result = 0;

    for (let i = 1; i < arr.length - 1; i++) {
        const leftMax = Math.max(...arr.slice(0, i));
        const rightMax = Math.max(...arr.slice(i, arr.length));
        const min = Math.min(leftMax, rightMax);
        if (min > arr[i]) result += min - arr[i];
    }
    console.log(result);
};

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
