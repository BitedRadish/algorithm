function prim(graph) {
    const n = graph.length; // 그래프의 정점 수
    const visited = Array(n).fill(false); // 방문한 정점을 추적하는 배열
    const minWeights = Array(n).fill(Infinity); // 각 정점까지의 최소 가중치를 저장하는 배열
    const parent = Array(n).fill(-1); // 각 정점의 부모를 저장하는 배열
    let minCost = 0; // 최소 비용을 저장하는 변수

    minWeights[0] = 0; // 임의의 시작 정점을 선택하고 해당 정점의 가중치를 0으로 설정

    for (let i = 0; i < n; i++) {
        // 현재까지 방문하지 않은 정점 중에서 최소 가중치를 가진 정점을 찾음
        let minWeightIdx = -1;
        for (let j = 0; j < n; j++) {
            if (
                !visited[j] &&
                (minWeightIdx === -1 ||
                    minWeights[j] < minWeights[minWeightIdx])
            ) {
                minWeightIdx = j;
            }
        }
        console.log(`minWeightIdx : ${minWeightIdx}`);
        visited[minWeightIdx] = true; // 최소 가중치 정점을 방문 처리
        minCost += minWeights[minWeightIdx]; // 최소 가중치를 결과에 더함

        // 선택한 정점의 인접한 정점들의 가중치를 업데이트
        for (let j = 0; j < n; j++) {
            if (
                graph[minWeightIdx][j] !== 0 &&
                !visited[j] &&
                graph[minWeightIdx][j] < minWeights[j]
            ) {
                parent[j] = minWeightIdx; // 선택한 정점으로부터 j까지의 가중치를 가진 정점을 연결
                minWeights[j] = graph[minWeightIdx][j]; // 가중치를 업데이트
            }
        }
    }

    return { minCost, parent }; // 최소 비용과 부모 배열을 반환
}

// 예시 그래프
const graph = [
    [0, 2, 0, 6, 0],
    [2, 0, 3, 8, 5],
    [0, 3, 0, 0, 7],
    [6, 8, 0, 0, 9],
    [0, 5, 7, 9, 0],
];

const { minCost, parent } = prim(graph);
console.log("Minimum Spanning Tree Cost:", minCost); // 최소 신장 트리의 가중치 출력
console.log("Parent Array:", parent); // 각 정점의 부모 출력
