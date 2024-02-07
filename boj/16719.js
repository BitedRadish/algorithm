const solution = (input) => {
    input = input.split("");
    const visited = Array(input.length).fill("");

    const printStr = (arr, start) => {
        if (arr.length === 0) return;
        const copy = arr.slice();
        const min = copy.sort()[0];
        const minIdx = arr.indexOf(min);

        visited[start + minIdx] = min;

        console.log(visited.join(""));
        printStr(arr.slice(minIdx + 1), start + minIdx + 1);
        printStr(arr.slice(0, minIdx), start);
    };
    printStr(input, 0);
};

const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    solution(line);
    process.exit();
});
