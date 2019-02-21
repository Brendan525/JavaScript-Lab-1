let userHealth = 40;
let grantHealth = 10;
let wins = 0;

function startGame() {

    const question = prompt("Would you like to play a game?"); 
        
    if (question === "yes") {
                startCombat();
            }
}

function startCombat() {
    const username = prompt(`What is your name?`);
        console.log(`Grant vs ${username}`);

while (userHealth > 0 && wins < 3) {

 const attack = prompt("Would you like to attack or quit?"); {
    function getDamage() {
    return Math.floor(Math.random() * 5);
    }
}   
    
if (attack === "attack") {
    userHealth -= getDamage();
    grantHealth -= getDamage();
    console.log(`${username} has ${userHealth} health left `)
    console.log(`Grant has ${grantHealth} health left`)
 

 } if (attack === 'quit') {
     break;
 }

if (grantHealth <= 0) {
wins++;
grantHealth = 10;
}

if (userHealth <= 0 && win < 3) {
console.log(`Grant has won.`);
}
if (wins === 3){
    console.log(`${username} has won.`);
}

}

}
