const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

function arrSort(arr) {
    const numArr = arr.sort((a, b) => a - b);
    return numArr;
}

const input = [];
rl.on("line", (line) => {
    input.push(parseInt(line));
}).on("close", () => {
    const [n, ...arr] = input;

    const ans = arrSort(arr);
    console.log(ans.join("\n"));
    process.exit();
});

// 퀵 정렬로 다시 풀어보기
