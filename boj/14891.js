class Gear {
    constructor(str) {
        this.state = str.split("");
    }
    turnLeft() {
        const el = this.state.shift();
        this.state.push(el);
    }
    turnRight() {
        const el = this.state.pop();
        this.state.unshift(el);
    }
}

function solution(input) {
    const gear = [];
    for (let i = 0; i < 4; i++) {
        gear.push(new Gear(input[i]));
    }

    const cnt = +input[4];

    for (let c = 0; c < cnt; c++) {
        const [gearNum, direction] = input[5 + c].split(" ").map(Number);
    }
}

const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
    input.push(line);
}).on("close", () => {
    solution(input);
    process.exit();
});
