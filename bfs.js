// 너비 우선 탐색 (Breadth First Search)
// 최단 경로를 찾아준다는 점에서 최단 길이를 보장해야 할 때 많이 사용
// 큐를 이용한다는 특징이 있다. (why ?) -> 선입선출을 이용해야하기 때문에
// 그래프를 탐색하는 것 .

// 프로퍼티 키는 정점을 뜻하며 , 프로퍼티 값은 해당 정점과 연결된 정점을 의미한다.
// 스스로 한 번 짜보기

// const graph = {
//     A: ["B", "C"],
//     B: ["A", "D"],
//     C: ["A", "G", "H", "I"],
//     D: ["B", "E", "F"],
//     E: ["D"],
//     F: ["D"],
//     G: ["C"],
//     H: ["C"],
//     I: ["C", "J"],
//     J: ["I"],
// };

// const BFS = (graph, startNode) => {
//     const visited = [];
//     let needVisit = [];

//     needVisit.push(startNode);
//     let i = 1;
//     while (needVisit.length !== 0) {
//         const node = needVisit.shift(); // 첫 번째 반복에서는 node="A"
//         if (!visited.includes(node)) {
//             visited.push(node);
//             needVisit = [...needVisit, ...graph[node]];
//         }
//         console.log(`${i}번 째 반복문 needVisit : ${needVisit}`);
//         i++;
//     }
//     return visited;
// };
// console.log(BFS(graph, "A"));

const graph = {
    A: ["B", "C"],
    B: ["A", "D"],
    C: ["A", "G", "H", "I"],
    D: ["B", "E", "F"],
    E: ["D"],
    F: ["D"],
    G: ["C"],
    H: ["C"],
    I: ["C", "J"],
    J: ["I"],
};

const BFS = (graph, startNode) => {
    const visited = [];
    let needVisit = [];

    needVisit.push(startNode);

    // 방문해야 할 곳이 남아 있다면 ,
    while (!(needVisit.length === 0)) {
        const node = needVisit.shift();
        //방문하지 않았다면 ,
        if (!visited.includes(node)) {
            visited.push(node);
            needVisit = [...needVisit, ...graph[node]];
        }
    }
    return visited;
};

const result = BFS(graph, "A");
console.log(result);
