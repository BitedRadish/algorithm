class MinHeap {
    constructor() {
        this.heap = [];
    }

    getLength = () => {
        return this.heap.length;
    };

    push = (node) => {
        this.heap.push(node);
        let i = this.heap.length - 1;
        let parentI = Math.floor((i - 1) / 2);
        while (i > 0 && this.heap[parentI] > this.heap[i]) {
            this.swap(i, parentI);
            i = parentI;
            parentI = Math.floor((i - 1) / 2);
        }
    };

    pop = () => {
        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        const result = this.heap[0];
        this.heap[0] = this.heap.pop();
        let i = 0;
        while (true) {
            const leftI = i * 2 + 1,
                rightI = i * 2 + 2;
            if (leftI >= this.heap.size) {
                break;
            }
            let nextI = i;
            if (this.heap[nextI] > this.heap[leftI]) {
                nextI = leftI;
            }
            if (
                rightI < this.heap.length &&
                this.heap[nextI] > this.heap[rightI]
            ) {
                nextI = rightI;
            }
            if (nextI === i) {
                break;
            }
            this.swap(i, nextI);
            i = nextI;
        }
        return result;
    };

    swap = (a, b) => {
        const temp = this.heap[a];
        this.heap[a] = this.heap[b];
        this.heap[b] = temp;
    };
}

function solution(input) {
    const n = +input[0];
    const minHeap = new MinHeap();

    for (let i = 1; i <= n; i++) {
        minHeap.push(+input[i]);
    }

    let res = 0;
    for (let i = 0; i < n - 1; i++) {
        const f = minHeap.pop();
        const s = minHeap.pop();
        const sum = f + s;
        res += sum;
        minHeap.push(sum);
    }
    console.log(res);
}

const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
    input.push(parseInt(line));
}).on("close", () => {
    solution(input);
    process.exit();
});
