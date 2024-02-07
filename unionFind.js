// 서로소 집합 알고리즘이라고도 불린다.
// 여러 개의 노드가 존재할 때 , 두 개의 노드를 선택하여 현재 이 두 노드가 서로 같은 그래프에 속하는지 판별하는 알고리즘

// 노드를 생성함.

const init = (N) => {
    return Array(N + 1)
        .fill(0)
        .map((val, idx) => idx);
};

const getParent = (init, a) => {
    if (init[a] == a) return a;
    return (init[a] = getParent(init, parent[a]));
};

const unionParent = (init, a, b) => {
    a = getParent(init, a);
    b = getParent(init, b);

    if (a < b) init[b] = a;
    else {
        init[a] = b;
    }
};
