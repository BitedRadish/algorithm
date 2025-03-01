// 16:27

function solution(input) {
    // x가 3으로 나누어 떨어지면, 3으로 나눈다.
    // x가 2로 나누어 떨어지면, 2로 나눈다.
    // 1을 뺀다.
    // 연산을 사용하는 횟수의 최솟값을 구하라.
    // 2의 약수이자 3의 약수인 애는 뭐로 나눌지 고민해봐야 함.

    const x = input;
    // 0과 1을 만들기 위해 시도해야 하는 횟수를 저장
    const memo = [0, 0];
    // 인덱스 별로 최소 횟수를 구함
    for (let num = 2; num <= x; num++) {
        memo[num] = memo[num - 1] + 1;
        // *2 하는게 더 최솟값인지 +1 하는게 더 최솟값인지
        if (num % 2 === 0) memo[num] = Math.min(memo[num], memo[num / 2] + 1);
        // *3 하는 것과 *2,+1 하는 것 중의 최소를 가리기 (6의 배수인 경우)
        if (num % 3 === 0) memo[num] = Math.min(memo[num], memo[num / 3] + 1);
    }
    console.log(memo[x]);
}

const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    solution(Number(line));
    process.exit();
});
