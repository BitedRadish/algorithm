function isPalindrome(word) {
    let len = word.length;
    for (let i = 0; i < len / 2; i++) {
        if (word[i] !== word[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

function palindrome(word) {
    if (isPalindrome(word)) {
        return 0;
    } else {
        let len = word.length;
        for (let i = 0; i < len / 2; i++) {
            if (word[i] !== word[len - 1 - i]) {
                // i번째 문자를 제거한 배열이 팰린드롬인지 확인
                if (isPalindrome(word.slice(0, i) + word.slice(i + 1))) {
                    return 1;
                }
                // len-1-i번째 문자를 제거한 배열이 팰린드롬인지 확인
                if (
                    isPalindrome(
                        word.slice(0, len - 1 - i) + word.slice(len - i)
                    )
                ) {
                    return 1;
                }
                return 2;
            }
        }
    }
}

function solution(input) {
    const T = +input[0];
    const wordArr = input.slice(1);

    let idx = 0;
    while (idx < T) {
        const word = wordArr[idx];
        console.log(palindrome(word));
        idx++;
    }
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
