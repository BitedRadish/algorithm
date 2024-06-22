class MinHeap {
    constructor() {
        this.heap = [null];
    }

    push(value) {
        this.heap.push(value);
        let currentIdx = this.heap.length - 1;
        let parentIdx = Math.floor(currentIdx / 2);

        while (
            parentIdx !== 0 &&
            this.heap[currentIdx].cost < this.heap[parentIdx].cost
        ) {
            this._swap(parentIdx, currentIdx);
            currentIdx = parentIdx;
            parentIdx = Math.floor(currentIdx / 2);
        }
    }

    pop() {
        if (this.isEmpty()) return;
        if (this.heap.length === 2) return this.heap.pop();

        const returnValue = this.heap[1];
        this.heap[1] = this.heap.pop();

        let currentIdx = 1;
        let leftIdx = 2;
        let rightIdx = 3;

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

    getLength() {
        return this.heap.length;
    }

    isEmpty() {
        return this.heap.length === 1;
    }
    _swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }
}
function solution(input) {
    const n = +input[0];
    const m = +input[1];

    const busArr = input.slice(2, m + 2);

    const [start, finish] = input[m + 2];

    const dist = Array(n + 1).fill(Infinity);
    const graph = Array.from({ length: n + 1 }, () => new Object());

    const heap = new MinHeap();

    for (let i = 0; i < m; i++) {
        const [src, dest, cost] = busArr[i];
        if (graph[src][dest] === undefined) {
            graph[src][dest] = cost;
        } else {
            if (graph[src][dest] > cost) {
                graph[src][dest] = cost;
            }
        }
    }

    heap.push({ node: start, cost: 0 });
    dist[start] = 0;

    while (!heap.isEmpty()) {
        const { node: current, cost: currentCost } = heap.pop();
        // 현재 노드까지의 최단 거리가 이미 발견된 최단 거리보다 길면
        if (currentCost > dist[current]) continue;
        for (const dest in graph[current]) {
            // 현재 노드를 경유하여 도달한 노드의 최단 거리가 이미 발견된 최단 거리보다 길면
            if (currentCost > dist[dest]) continue;
            // 현재 노드와 연결돼있는 노드들의 가중치
            const cost = graph[current][dest];
            const nextCost = currentCost + cost;

            // 더 작으면 갱신 및 heap에 등록
            if (nextCost < dist[dest]) {
                dist[dest] = nextCost;
                heap.push({ node: dest, cost: nextCost });
            }
        }
    }
    console.log(dist[finish]);
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
