# wordle-words
Picks the best starting guesses for Wordle

## Method
1. Each letter is given a score equal to the number of times it appears in the entire list. The score thus represents how valuable it is to guess that letter, in order to have the best chance of exposing correct letters.

2. The value of each word is then determined based on the total value of unique letters it contains.

3. The words are then scored again, but excluding the value of previously guessed letters in order to determin the most-valuable second and third guesses.

## Results, and How to Use

Guess the words in the following order. After each of these words, consider whether you might be able to guess. (You probably won't need to use all three!)

`later` `sonic` `dumpy`

Scores for words after these three dropped off significantly...

## Other Works

Oddly enough, a number of people have tried to do this, and haven't come up with these words. One article claims that "a computer programmer" determined the best word to be `clone`, but `clone` gives a total score of 3758, whereas `later` gives a score of 4559.

The words list shwon above was derived from the Wordle source code, but placed into random order and with each word scrambled in order to avoid any copyright infringement.
