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
    return scored.sort((a, b) => b.score - a.score)[0].word;
}

const best1 = best();
const best2 = best(best1);
const best3 = best(best1 + best2);

function unscramble(w) {
    return w[2] + w[1] + w[3] + w[0] + w[4];
}

console.log(unscramble(best1), unscramble(best2), unscramble(best3));

// later sonic dumpy
