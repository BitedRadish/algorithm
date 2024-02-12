function solution(input) {
    const [n, m] = input[0];
    const map = input.slice(1);
    // 집의 좌표
    const houses = [];
    // 치킨 집의 좌표
    const chickens = [];

    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            if (map[r][c] === 1) {
                houses.push([r, c]);
            } else if (map[r][c] === 2) {
                chickens.push([r, c]);
            }
        }
    }

    //집 별 치킨집과의 거리 ? 치킨집 별 집과의 거리 ?
    let minArr = [];
    houses.forEach((house) => {
        const [hX, hY] = house;
        let min = Number.MAX_VALUE;
        chickens.forEach((chicken) => {
            const [cX, cY] = chicken;
            min = Math.min(min, Math.abs(hX - cX) + Math.abs(hY - cY));
        });
        minArr.push(min);
    });
    console.log(minArr);
    if (chickens.length === m) {
        console.log(minArr.reduce((acc, cur) => acc + cur));
    }
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
