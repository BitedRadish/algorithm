class Node {
    constructor(src, dest, cost) {
        this.src = src;
        this.dest = dest;
        this.cost = cost;
    }
}
class MinHeap {
    constructor() {
        this.heap = [];
    }
    push(src, dest, cost) {
        const node = new Node(src, dest, cost);
        this.heap.push(node);

        let currentIdx = heap.length - 1;
        let parentIdx = Math.floor((currentIdx - 1) / 2);

        while (
            parentIdx !== 0 &&
            this.heap[currentIdx] < this.heap[parentIdx]
        ) {
            this._swap(currentIdx, parentIdx);
            currentIdx = parentIdx;
            parentIdx = Math.floor((currentIdx - 1) / 2);
        }
    }

    pop() {
        if (this.isEmpty()) return;
        if (this.heap.length === 1) return this.heap.pop();

        const returnValue = this.heap[0];
        this.heap[0] = this.heap.pop();

        let currentIdx = 0;
        let leftIdx = 1;
        let rightIdx = 2;

        while (
            (this.heap[leftIdx] &&
                this.heap[currentIdx].cost > this.heap[leftIdx].cost) ||
            (this.heap[rightIdx] &&
                this.heap[currentIdx].cost > this.heap[rightIdx].cost)
        ) {
            if (this.heap[leftIdx] === undefined) {
                this._swap(rightIdx, currentIdx);
            } else if (this.heap[rightIdx] === undefined) {
                this._swap(leftIdx, currentIdx);
            } else if (this.heap[leftIdx].cost > this.heap[rightIdx].cost) {
                this._swap(rightIdx, currentIdx);
            } else if (this.heap[leftIdx].cost <= this.heap[rightIdx].cost) {
                this._swap(leftIdx, currentIdx);
            }
            leftIdx = currentIdx * 2;
            rightIdx = currentIdx * 2 + 1;
        }
        return returnValue;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    _swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }
}

function solution(input) {
    const [n, m, k] = input[0];
    const roadArr = input.slice(1, m + 1);

    const graph = Array.from({ length: n + 1 }, () => []);

    for (let i = 0; i < m; i++) {
        const [src, dest, cost] = roadArr[i];
        graph[src].push({
            dest: dest,
            cost: cost,
        });
    }

    const dist = Array.from({ length: n + 1 }, () =>
        Array(n + 1).fill(Infinity)
    );
    console.log(dist);
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
