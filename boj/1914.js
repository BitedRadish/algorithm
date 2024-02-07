function solution(input) {
    const n = input;
    hanoi(n, 1, 3, 2);
    console.log((2n ** BigInt(n) - 1n).toString(10));
    console.log(arr.join("\n"));
}
const arr = [];

function hanoi(disk, start, end, middle) {
    // 원판의 갯수 , 시작 위치 , 목표 위치 , 거치는 위치
    if (disk === 1) return arr.push(`${start} ${end}`);

    hanoi(disk - 1, start, middle, end);
    arr.push(`${start} ${end}`);
    hanoi(disk - 1, middle, end, start);
}
const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    if (parseInt(line) <= 20) {
        solution(parseInt(line));
    } else {
        console.log((2n ** BigInt(parseInt(line)) - 1n).toString(10));
    }
    process.exit();
});

// const input = require("fs").readFileSync("/dev/stdin");
// console.log(input);

// const answer = [];
// const hanoi = (disk, start, end, middle) => {
//     if (disk == 1) return answer.push(`${start} ${end}`);

//     hanoi(disk - 1, start, middle, end);
//     answer.push(`${start} ${end}`);
//     hanoi(disk - 1, middle, end, start);
// };

// console.log(2 ** input - 1);

// // if (input > 20) return;
// hanoi(input, 1, 3, 2);
// console.log(answer.join("\n"));
