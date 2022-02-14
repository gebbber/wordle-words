const words = require('./words');

const chars = {};

words.forEach((word) => {
    for (let i = 0; i < 5; i++) {
        const char = word[i];

        if (!chars[char]) chars[char] = 1;
        else chars[char]++;
    }
});

function best(except) {
    const scored = [];

    words.forEach((word, j) => {
        let score = 0;
        let s = except || '';

        for (let i = 0; i < 5; i++) {
            if (!s.includes(word[i])) score += chars[word[i]];
            s += word[i];
        }
        scored.push({ word, score });
    });
    return scored.sort((a, b) => b.score - a.score)[0];
}

let used = '';
for (let i = 0; i < 20; i++) {
    const c = best(used);
    if (c.score) console.log(unscramble(c.word) + ':', c.score);
    used += c.word;
}

function unscramble(w) {
    return w[2] + w[1] + w[3] + w[0] + w[4];
}
