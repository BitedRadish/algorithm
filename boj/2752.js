function printArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

function threeSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }
    printArr(arr);
}

const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

input = [];

rl.on("line", (line) => {
    input.push(line.split(" ").map((e) => parseInt(e)));

    rl.close();
}).on("close", () => {
    threeSort(input[0]);
    process.exit();
});
