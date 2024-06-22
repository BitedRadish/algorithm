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
    const [n, m] = input[0];
    const arr = input.slice(1);

    const inDegree = Array(n + 1).fill(0);
    const graph = Array.from({ length: n + 1 }, () => []);

    for (const el of arr) {
        const [n1, n2] = el;
        graph[n1].push(n2);
        inDegree[n2]++;
    }

    const pq = new MinHeap();
    const result = [];

    for (let i = 1; i < n + 1; i++) {
        if (inDegree[i] === 0) {
            pq.push(i);
        }
    }

    while (pq.getLength()) {
        const cur = pq.pop();
        result.push(cur);

        for (const adj of graph[cur]) {
            inDegree[adj]--;
            if (inDegree[adj] === 0) {
                pq.push(adj);
            }
        }
    }
}

const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
    input.push(line.split(" ").map(Number));
}).on("close", () => {
    solution(input);
    process.exit();
});
