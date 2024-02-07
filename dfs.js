// 깊이 우선 탐색 (Depth First Search)
// 미로 찾기
// 스택을 이용한다는 특징이 있다. (why ?)
// 그래프를 탐색하는 것 .

// 프로퍼티 키는 정점을 뜻하며 , 프로퍼티 값은 해당 정점과 연결된 정점을 의미한다.
// 스스로 한 번 짜보기
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

const DFS = (graph, startNode) => {
    const visited = [];
    let needVisit = [];

    needVisit.push(startNode);
    let i = 1;
    while (needVisit.length !== 0) {
        const node = needVisit.shift(); // 첫 번째 반복에서는 node="A"
        if (!visited.includes(node)) {
            visited.push(node);
            needVisit = [...graph[node], ...needVisit]; // stack 구조와 같다 , 후입 선출
        }
        console.log(`${i}번 째 반복문 needVisit : ${needVisit}`);
        i++;
    }
    return visited;
};
console.log(DFS(graph, "A"));
