


var fight = function(enemy) {
    console.log(enemy);
    while (enemy.Health > 0 && playerInfo.health > 0) { 

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle?");
    if (promptFight === "skip" || promptFight === "SKIP") {
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        if (confirmSkip) { 
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            playerInfo.money = Math.max(0, playerInfo.money - 10);
            console.log("playerMoney: ", playerInfo.money);
            break;
        }
    }  
    
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
    enemy.Health = Math.max(0, enemy.Health - damage);

    console.log(playerInfo.name + " attacked " + enemy.Name + ". " + enemy.Name + " now has " + enemy.Health + " health remaining.");

    if (enemy.Health <= 0) {
        window.alert(enemy.Name+ " has died.");
        
        playerInfo.money = playerInfo.money + 20;
        break;
    } else {
        window.alert(enemy.Name + " still has " + enemy.Health + " health left.");
    }

    var damage = randomNumber(enemy.Attack - 3, enemy.Attack);
    playerInfo.health = Math.max(0, playerInfo.health - damage);
    console.log(enemy.Name + " attacked " + playerInfo.money + ". " + playerInfo.money + " now has " + playerInfo.health + " health remaining.")

    if (playerInfo.health <= 0) {
        window.alert(playerInfo.name + " has died.");
        break;
    }
    else {
        window.alert(playerInfo.name + " stil has " + playerInfo.health + " health left.");
    }
  }
}

 var startGame = function () {
     playerInfo.reset();
    for (i = 0; i < enemyInfo.length; i++) {
     if (playerInfo.health > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
        var pickedEnemyObj = enemyInfo[i];
        pickedEnemyObj.health = randomNumber(40, 60);
        fight(pickedEnemyObj);

        if (playerInfo.health > 0 && i < enemyNames.length - 1) { 
            var storeConfirm = window.confirm("The fight is over, visit the store before the next round.");
            shop();
        }
    } else {
        window.alert("You have lost your robot in battle! Game Over!");
        
        break;
     }    
    }
    endGame();
 }

    var endGame = function() {
        if (playerInfo.health > 0) {
            window.alert("Great job! You've survived the game! You now have a score of " + playerInfo.money + ".");
        }
        else{
            window.alert("You've lost your robot in battle.");
        }

        var playAgainConfirm = window.confirm("Would you like to play again?");

        if (playAgainConfirm) {
            startGame();
        }
        else {
            window.alert("Thank you for playing Robot Gladiators! Come back soon!");
        }
    }
 var randomNumber= function(min, max) {
     var value = Math.floor(Math.random() * (max - min + 1) + min);
     return value;
 }





 var shop = function() {
     var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");
    
     switch (shopOptionPrompt) {
         case "refill":
         case "REFILL":
             playerInfo.refillHealth();
             break;

         case "upgrade":
         case "UPGRADE":
             playerInfo.upgradeAttack();
             break;

         case "leave":
         case "LEAVE":    
             window.alert("Leaving the store.");
             break;
             
         default:
             window.alert("You did not pick a valid option. Try again.");
             
        //call shop again to force a player to pick a valid option     
        shop();
        break;
     }
 
    }

    var playerInfo = {
        name: window.prompt("What is your name?"),
        health: 100,
        attack: 10,
        money: 10,
        reset: function(){
            this.health = 100;
            this.money = 10;
            this.attack = 10;
        },
        refillHealth: function(){
            if (this.money >= 7){
                window.alert("Refilling player's health by 20 for 7 dollars.");
                this.health += 20;
                this.money -= 7;
            } else {
                window.alert("You don't have enough money!");
            }
        },
        upgradeAttack: function() {
            if (this.money >= 7) {
              window.alert("Upgrading player's attack by 6 for 7 dollars.");
              this.attack += 6;
              this.money -= 7;
            } 
            else {
            window.alert("You don't have enough money!");
            }
    }
    
    var enemyInfo = [
        {
            name: "Roborto",
            attack: randomNumber(10, 14)
        },
        {
            name: "Amy Android",
            attack: randomNumber(10, 14)
        },
        {
            name: "Robo Trumble",
            attack: randomNumber(10, 14)
        }
    ];

startGame();

