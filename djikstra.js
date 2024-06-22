// 선형 자료구조를 이용

const INF = Infinity;

const arr = [
    [0, 2, 5, 1, INF, INF],
    [2, 0, 3, 2, INF, INF],
    [5, 3, 0, 3, 1, 5],
    [1, 2, 3, 0, 1, INF],
    [INF, INF, 1, 1, 0, 2],
    [INF, INF, 5, INF, 2, 0],
];

const isVisit = new Array(6).fill(false);

const getMin = (vertex) => {
    let min = INF;
    let idx = 0;
    for (let i = 0; i < vertex.length; i++) {
        if (min > vertex[i] && !isVisit[i]) {
            min = vertex[i];
            idx = i;
        }
    }
    return idx;
};

const dist = (start) => {
    // 배열이 가져와짐
    let v = arr[start - 1];

    // 거쳐가는 노드의 수
    let count = 0;
    // 선택한 배열의 길이
    let end = v.length;
    let min = 0;
    let startV = v.slice();
    isVisit[start - 1] = true;

    while (count < end) {
        const idx = getMin(startV);
        min += startV[idx];

        // 다음 노드의 연결 배열
        const next = arr[idx];
        // 시작 지점의 거리 배열을 업데이트 하는 것
        for (let i = 0; i < v.length; i++) {
            // 시작 배열에 저장된 거리와 다른 노드를 거쳐가는 비용 비교
            if (v[i] > next[i] + min && !isVisit[i]) {
                v[i] = next[i] + min;
            }
        }
        startV = arr[idx];
        isVisit[idx] = true;
        count++;
    }
    console.log(v);
};

dist(1);
