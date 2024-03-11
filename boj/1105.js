function solution(input) {
    const [l, r] = input;

    if (l.length !== r.length) {
        console.log(0);
    } else {
        let cnt = 0;
        for (let i = 0; i < l.length; i++) {
            if (l[i] !== r[i]) break;
            if (l[i] === "8" && r[i] === "8" && l[i] === r[i]) cnt++;
        }
        console.log(cnt);
    }
    // l과 r의 길이가 다르면 무조건 0
}

const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    solution(line.split(" "));
    process.exit();
});
