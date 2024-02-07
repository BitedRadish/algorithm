function solution(input) {
    // 원본 꿀통
    const n = input[0][0];
    const honey = input[1];
    const sumHoney = sectionSum(honey);
    const maxHoney = [];

    // bee1이 왼쪽 끝에서 시작 , 꿀통이 맨 오른쪽
    const case1 = [];
    for (let i = 1; i < honey.length - 1; i++) {
        const b1 = sumHoney[n - 1] - sumHoney[0] - honey[i];
        const b2 = sumHoney[n - 1] - sumHoney[i];
        case1.push(b1 + b2);
    }
    maxHoney.push(Math.max(...case1));

    //bee1이 오른쪽 끝에서 시작 , 꿀통이 맨 왼쪽
    const case2 = [];
    for (let i = honey.length - 2; i > 0; i--) {
        const b1 = sumHoney[n - 2] - honey[i];
        const b2 = sumHoney[i - 1];
        case2.push(b1 + b2);
    }
    maxHoney.push(Math.max(...case2));

    // bee1 , bee2 양 쪽 끝 시작 , 꿀통 중간 어딘가
    const case3 = [];
    for (let i = 1; i < honey.length - 1; i++) {
        const b1 = sumHoney[i] - honey[0];
        const b2 = sumHoney[n - 2] - sumHoney[i - 1];
        case3.push(b1 + b2);
    }
    maxHoney.push(Math.max(...case3));

    console.log(Math.max(...maxHoney));
}
function sectionSum(arr) {
    const sumArr = arr.slice();
    for (let i = 1; i < sumArr.length; i++) {
        sumArr[i] += sumArr[i - 1];
    }
    return sumArr;
}

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
