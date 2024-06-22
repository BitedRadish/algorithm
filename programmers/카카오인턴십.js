function solution(friends, gifts) {
    const friendsHash = [];
    const n = friends.length;
    friends.forEach(
        (friend, idx) => (friendsHash[friend] = { id: idx, give: 0, take: 0 })
    );
    const send = Array.from({ length: n }, () => Array(n).fill(0));

    gifts.forEach((gift) => {
        let [from, to] = gift.split(" ");
        friendsHash[from].give++;
        friendsHash[to].take++;

        [from, to] = [friendsHash[from].id, friendsHash[to].id];
        send[from][to]++;
    });

    const nextMonth = Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const f = send[i][j];
            const s = send[j][i];
            console.log(f, s);
            if (f === s || (f === 0 && s === 0)) {
                const fName = friends[i];
                const sName = friends[j];

                const fIdx = friendsHash[fName].give - friendsHash[fName].take;
                const sIdx = friendsHash[sName].give - friendsHash[sName].take;

                if (fIdx === sIdx) continue;
                fIdx > sIdx ? nextMonth[i]++ : nextMonth[j]++;
            } else {
                f > s ? nextMonth[i]++ : nextMonth[j]++;
            }
        }
    }
    return Math.max(...nextMonth);
}
