// DNA 문자열은 모든 문자열에 등장하는 문자가 A,C,G,T
// DNA 문자열의 부분 문자열을 비밀번호로

// 입력 : DNA 문자열과 , 부분 문자열의 길이 , ACGT 몇회 사용
// 출력 : 만들 수 있는 부분 문자열의 갯수 (부분 문자열이 등장하는 위치가 다르면 같은 문자여도 다른 문자열로 , 즉 중복 가능)
function solution(input) {
    const [s, p] = input[0].split(" ").map(Number);
    const str = input[1].split("");
    // A C G T
    const dna = input[2].split(" ").map(Number);
    const dict = {
        A: 0,
        C: 1,
        G: 2,
        T: 3,
    };

    const init = str.slice(0, p).reduce(
        (acc, c) => {
            acc[dict[c]]++;
            return acc;
        },
        [0, 0, 0, 0]
    );
    let cnt = 0;

    for (let i = 1, j = p; j < s + 1; i++) {
        let isDna = true;
        if (
            init[0] >= dna[0] &&
            init[1] >= dna[1] &&
            init[2] >= dna[2] &&
            init[3] >= dna[3]
        ) {
            cnt++;
        }
        init[dict[str[i - 1]]]--;
        init[dict[str[j]]]++;
        j++;
    }
    console.log(cnt);
}

const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
    input.push(line);
}).on("close", () => {
    solution(input);
    process.exit();
});
