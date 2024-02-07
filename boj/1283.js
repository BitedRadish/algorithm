const solution = (input) => {
    const n = +input.shift();

    // 입력 값
    const options = input;
    // 등록된 단축키
    const saved = [];
    // 결과 값
    const shortCut = [];

    let idx = 0;
    while (idx < n) {
        const words = options[idx].split(" ");
        // 단축키 설정이 되었다는 표시
        let isRegistered = 0;
        for (let i = 0; i < words.length; i++) {
            // 단어를 쪼개서 배열로 만들기
            const word = words[i].split("");
            if (!saved.includes(word[0].toLowerCase())) {
                saved.push(word[0].toLowerCase());
                word[0] = `[${word[0]}]`;
                words[i] = word.join("");
                shortCut.push(words.join(" "));
                isRegistered = 1;
                break;
            }
        }

        if (!isRegistered) {
            const word = options[idx].split("");
            for (let i = 0; i < word.length; i++) {
                if (word[i] !== " " && !saved.includes(word[i].toLowerCase())) {
                    saved.push(word[i].toLowerCase());
                    word[i] = `[${word[i]}]`;
                    shortCut.push(word.join(""));
                    isRegistered = 1;
                    break;
                }
            }
        }

        if (!isRegistered) {
            shortCut.push(words.join(" "));
        }
        ++idx;
    }
    console.log(shortCut.join("\n"));
};

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
