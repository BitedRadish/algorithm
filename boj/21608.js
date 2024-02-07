class student {
    constructor(stdNum, stdLikes) {
        this.stdNum = stdNum;
        this.stdLikes = stdLikes;
    }
}

const solution = (input) => {
    const n = +input[0];
    const seatArr = Array(n)
        .fill(0)
        .map(() => Array(n).fill(0));

    // 첫 번째 학생
    const std1Obj = {
        stdNum: input[1].shift(),
        stdLikes: input[1],
    };
    if (n % 2 === 0) {
        seatArr[n / 2 - 1][n / 2 - 1] = std1Obj;
    } else {
        seatArr[Math.floor(n / 2)][Math.floor(n / 2)] = std1Obj;
    }

    // 1. 비어있는 칸 중에서 좋아하는 학생이 '인접한 칸에 가장 많은 칸으로'
    // 2. 인접한 칸 중에서 비어있는 칸이 가장 많은 칸으로
    // 3. 행의 번호가 가장 작은 칸으로(위) , 열의 번호가 가장 작은 칸(왼쪽)으로
    for (let std = 0; std < input.length; std++) {
        // 학생 객체 생성
        const stdNum = input[2 + std].shift();
        const stdLikes = input[2 + std];
        const stdObj = {
            stdNum,
            stdLikes,
        };
    }

    const arrUpdate = (stdObj) => {
        const infoArr = Array(n)
            .fill(0)
            .map(() => Array(n).fill(0));
        for (let r = 0; r < n; r++) {
            for (let c = 0; c < n; c++) {
                if (seatArr[r][c] === 0) {
                    if(r===0){
                        if(c===0){
                            seatArr[r][c+1]===0?

                        }else if(c===n-1){

                        }

                    }else if(r===n-1){
                        if(c===0){

                        }else if(c===n-1){
                            
                        }

                    }
                        
                    else if(c===0){

                    }else if (c===n-1){

                    }
                } else {
                    infoArr[r][c]=seatArr[r][c]
                }
            }
        }
    };
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
