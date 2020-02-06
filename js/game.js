$(document).ready(function() {
    "use strict";
    var user;
    var computer;
    var outPut;

    function compareOptions(user, computer) {
        var result = "";
        if (user === "Rock") {
            if (computer === "Paper") {
                result = "Sorry, you lose. Paper covers Rock.";
            } else if (computer === "Lizard") {
                result = "You win! Rock crushes Lizard.";
            } else if (computer === "Scissors") {
                result = "You win! Rock crushes Scissors.";
            } else if (computer === "Spock") {
                result = "Sorry, you lose. Spock vaporizes Rock.";
            } else if (computer === "Rock") {
                result = "Nobody wins.... Tie!";
            }
        } else if (user === "Paper") {
            if (computer === "Rock") {
                result = "You win! Paper covers Rock.";
            } else if (computer === "Spock") {
                result = "You win! Paper disproves Spock.";
            } else if (computer === "Lizard") {
                result = "Sorry, you lose. Lizard eats Paper.";
            } else if (computer === "Scissors") {
                result = "Sorry, you lose. Scissors cut Paper.";
            } else if (computer === "Paper") {
                result = "Nobody wins.... Tie!";
            }
        } else if (user === "Scissors") {
            if (computer === "Spock") {
                result = "Sorry, you lose. Spock smashes Scissors.";
            } else if (computer === "Paper") {
                result = "You win! Scissors cuts Paper.";
            } else if (computer === "Rock") {
                result = "Sorry, you lose. Rock crushes Scissors.";
            } else if (computer === "Lizard") {
                result = "You win! Scissors decapitates Lizard.";
            } else if (computer === "Scissors") {
                result = "Nobody wins.... Tie!";
            }
        } else if (user === "Lizard") {
            if (computer === "Spock") {
                result = "You win! Lizard poisons Spock.";
            } else if (computer === "Paper") {
                result = "You win! Lizard eats Paper.";
            } else if (computer === "Rock") {
                result = "Sorry, you lose. Rock crushes Lizard.";
            } else if (computer === "Scissors") {
                result = "Sorry, you lose. Scissors decapitates Lizard.";
            } else if (computer === "Lizard") {
                result = "Nobody wins.... Tie!";
            }
        } else if (user === "Spock") {
            if (computer === "Scissors") {
                result = "You win! Spock smashes Scissors.";
            } else if (computer === "Rock") {
                result = "You win! Spock vaporizes Rock.";
            } else if (computer === "Paper") {
                result = "Sorry, you lose. Paper disproves Spock.";
            } else if (computer === "Lizard") {
                result = "Sorry, you lose. Lizard poisons Spock.";
            } else if (computer === "Spock") {
                result = "Nobody wins.... Tie!";
            }
        } else {
            result = "Sorry Incorrect data input, try again.";
        }
        return result;
    }

    function createMachineBet() {
        var randomNumber, choice;
        randomNumber = Math.floor((Math.random() * 5) + 1);

        switch (randomNumber) {
        case 1:
            choice = "Rock";
            break;
        case 2:
            choice = "Paper";
            break;
        case 3:
            choice = "Scissors";
            break;
        case 4:
            choice = "Lizard";
            break;
        case 5:
            choice = "Spock";
            break;
        default:
            choice = "";
            break;
        }

        return choice;
    }
    function updateResults(user, computer) {
        $("#user").val(user);
        $("#computer").val(computer);
    }

    $("#playGame").click(function() {
        $("#askUserBet").modal('show');

        $("#beginGame").click(function() {
            user = $("#userBet").val();
            computer = createMachineBet();
            outPut = compareOptions(user, computer);

            while (outPut === "Incorrect input.") {
                user = prompt("Please enter a correct input. Rock, Paper, Scissors, Lizard, or Spock ?");
                computer = createMachineBet();
                outPut = compareOptions(user, computer);
            }
            updateResults(user, computer);
            $("#askUserBet").modal('hide');

            $("#showResultLabel").text(outPut);
            $("#theResult").text(outPut);
            $("#showResult").modal('show');
        });
    })
});
