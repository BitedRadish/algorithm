const solution = (input) => {
    const [n, r, c] = input;
    // 총 탐색해야 할 배열의 크기는 2^n * 2^n
    // 2^(n-1) , 2^(n-1) 크기로 4등분한다.
    // 무조건 4등분이니까 행의 길이/2 , 열의 길이/2
    // 한 박스의 최대 인덱스는 2^n -1이다.
    // 일단 몇 번째 박스인지 탐색해야 함. 3번째 박스라면 3번째 박스의 첫번째 인덱스는 2^3

    const sectionSize = 2 ** (n - 1) * 2 ** (n - 1);

    let sectionRow = 2 ** (n - 1);
    let sectionCol = 2 ** (n - 1);

    let cnt = 0;

    function cntOrder(sectionSize, sectionRow, sectionCol, sectionLength) {
        // 1사분면
        if (r < sectionRow && c >= sectionCol) {
            cnt += sectionSize * 1;

            sectionRow -= sectionLength / 2;
            sectionCol += sectionLength / 2;
        }
        // 2사분면
        else if (r < sectionRow && c < sectionCol) {
            cnt += sectionSize * 0;
            sectionRow -= sectionLength / 2;
            sectionCol -= sectionLength / 2;
        }
        // 3사분면
        else if (r >= sectionRow && c < sectionCol) {
            cnt += sectionSize * 2;
            sectionRow += sectionLength / 2;
            sectionCol -= sectionLength / 2;
        }
        // 4사분면
        else {
            cnt += sectionSize * 3;

            sectionRow += sectionLength / 2;
            sectionCol += sectionLength / 2;
        }
        if (sectionSize === 1) return;

        cntOrder(sectionSize / 4, sectionRow, sectionCol, sectionLength / 2);
    }
    cntOrder(sectionSize, sectionRow, sectionCol, 2 ** (n - 1));
    console.log(cnt);
};

const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    solution(line.split(" ").map((el) => parseInt(el)));
    process.exit();
});
