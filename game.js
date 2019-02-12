var userHealth = 40;
var Grant = 10;
var wins = 0;

var play = window.prompt("Would you like to play? Yes or No?");
if (play == "Yes") {

    var username = window.prompt("Lets began. Type in your username");
    while (username === "") {
        // window.prompt("Please type in your name in the field")
        var username = window.prompt("Type in your name");
    }

}

window.alert("Grant vs " + username);

function damage() {
    return Math.floor(Math.random() * 2) + 1;
}

window.alert('Grant has 10 health points and ' + username + " has 40 health points");

while (Grant >= 0 && wins < 3) {
    userHealth -= damage();
    Grant -= damage();
    console.log(`${username} has ${userHealth}.`);
    console.log(`Grant has ${Grant}.`);
}

if (userHealth <= 0) {
    console.log("Grant wins the game.")
} else (Grant <= 0) 
    console.log('Grant is defeated and ' + username + " has 1 wins.");




    (window.alert('Grant vs ' + username + " round 2")); {

        var Grant = 10;

        function damage() {
            return Math.floor(Math.random() * 2) + 1;
        }

        while (Grant >= 0 && wins < 2) {
            userHealth -= damage();
            Grant -= damage();
            console.log(`${username} has ${userHealth}.`);
            console.log(`Grant has ${Grant}.`);
        }

        if (userHealth <= 0) {
            console.log("Grant wins the game.")
        } else (Grant <= 0) 
            console.log('Grant is defeated and ' + username + " has 2 wins.");
        


        (window.alert('Grant vs ' + username + " round 3")); {

            var Grant = 10;

            function damage() {
                return Math.floor(Math.random() * 2) + 1;
            }

            while (Grant >= 0 && wins < 2) {
                userHealth -= damage();
                Grant -= damage();
                console.log(`${username} has ${userHealth}.`);
                console.log(`Grant has ${Grant}.`);
            }

            if (userHealth <= 0) {
                console.log("Grant wins the game.")
            } else (Grant <= 0);
            console.log(`${username} wins the game!`)

        }
    
}

