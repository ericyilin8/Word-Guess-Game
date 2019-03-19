        var wins = document.getElementById("wins");
        var losses = document.getElementById("losses");
        var guessesLeft = document.getElementById("guessesLeft");
        var guesses = document.getElementById("guesses");

        var winCount = 0;
        var lossCount = 0;
        var leftCount = 9;
        var guessesSoFar = [];

        var compLetter;

        gameinit();

        document.onkeyup = function (event) {
            var yourLetter = event.key;
            if (yourLetter == compLetter) {
                winCount++;
                wins.textContent = winCount;
                gameinit();
            }
            else {
                leftCount--;
                guessesLeft.textContent = leftCount;
                guessesSoFar.push(yourLetter);
                guesses.textContent = guessesSoFar;
                if (leftCount == 0) {
                    lossCount++;
                    losses.textContent = lossCount;
                    gameinit();
                }
            }
        };

        function gameinit() {
            compLetter = String.fromCharCode(Math.floor((Math.random() * 26) + 97));
            leftCount = 9;
            guessesSoFar = [];
            guessesLeft.textContent = leftCount;
            guesses.textContent = guessesSoFar;
        }

