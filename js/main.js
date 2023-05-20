const max_number = 500;
let guesses = [];

const generate_number = (max) => {
    return Math.floor(Math.random() * max);
};

const guess = (my_guess, answer, guesses_array) => {
    guesses.push(my_guess);
    if (my_guess === answer) {
        console.log(
            `Bravo vous avez trouvé le nombre en ${guesses_array.length} coups.`
        );
        return;
    } else if (my_guess < answer) {
        console.log(
            `C'est plus. Vous en etes au ${guesses_array.length}eme coups.`
        );
        return guess(
            parseInt(prompt("Veuillez entrer votre reponse ?")),
            answer,
            guesses_array
        );
    } else if (my_guess > answer) {
        console.log(
            `C'est moins. Vous en etes au ${guesses_array.length}eme coups.`
        );
        return guess(
            parseInt(prompt("Veuillez entrer votre reponse ?")),
            answer,
            guesses_array
        );
    } else {
        return;
    }
};

const start_game = () => {
    const answer = generate_number(max_number);
    console.log(answer);
    guesses = [];
    guess(parseInt(prompt("Veuillez entrer votre reponse ?")), answer, guesses);
};

start_game();
