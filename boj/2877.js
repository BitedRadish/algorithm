const solution = (input) => {
    const n = input;
    let binary = (n + 1).toString(2).replace(/^./, "");

    binary = binary.replaceAll("0", "4");
    binary = binary.replaceAll("1", "7");
    console.log(binary);
};

const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", (line) => {
    solution(parseInt(line));
    process.exit();
});
