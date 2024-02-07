// 누적합 문젠데 요상하게  풀어버림

function solution(input) {
    const t = input[0][0];

    let cnt = 0;

    while (cnt < t) {
        //
        const n = input[cnt + 1][0];

        // n 값을 제외한 빌린 돈에 대한 배열
        const ai = input[cnt + 1].splice(1);
        // S(1)은 항상 0이기 때문에 , 0으로 초기화
        const s = [0];

        for (let i = 2; i <= n; i++) {
            // nC0+nC1+...nCn == 2^n , 여기서 0번 고르는 것과 1번 고르는 것은 빼도 O(2^n)
            const candidates = getCombination(ai, i);
            const calArr = candidates.map((el) => {
                const max = Math.max(...el);
                const elSum = el.reduce((acc, cur) => {
                    return acc + cur;
                }, 0);
                return max * i - elSum;
            });
            s.push(Math.min(...calArr));
        }
        const sSum = s.reduce((acc, cur) => {
            return acc + cur;
        }, 0);

        console.log(sSum);
        cnt++;
    }
}

const getCombination = (arr, n) => {
    // n이 1이 되는 경우는 현재값을 선택하는 것과 동일
    // 따라서 각각의 원소를 바로 배열 형태로 리턴
    // 재귀호출에서 n이 1이 되는 순간부터 배열 데이터 생성
    // 즉 1부터 역으로 다시 거슬러 올라가 n이 될때까지
    // 선택된 원소들로 배열(조합)을 구성
    if (n === 1) return arr.map((el) => [el]);
    // 최종 결과를 담을 배열
    const result = [];

    // fixed : 고정할 원소, origin : 원본 배열
    arr.forEach((fixed, idx, origin) => {
        // 현재 고정한 원소 이후의 배열을 나머지로 선언
        const rest = origin.slice(idx + 1);
        // 나머지와 n-1을 다시 전달하여 재귀호출
        const combis = getCombination(rest, n - 1);
        // 재귀호출이 끝나고 돌아오는 시점은
        // 처음 고정한 fixed로 구성 가능한 모든 조합을 리턴받은 이후
        // 따라서 리턴받은 값과 fixed를 다시 합쳐주어 조합 구성
        const attached = combis.map((combi) => [fixed, ...combi]);
        // 구성된 조합 배열을 결과에 푸시
        result.push(...attached);
    });

    // 위에서 모든 재귀호출이 종료되면 저장된 조합 경우의 수 리턴
    return result;
};

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
