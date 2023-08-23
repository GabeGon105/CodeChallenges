// Something is wrong with our Warrior class. The strike method does not work correctly. The following shows an example of this code being used:

const ninja = new Warrior('Ninja');
const samurai = new Warrior('Samurai');

samurai.strike(ninja, 3);
// ninja.health should == 70
// Can you figure out what is wrong?



const Warrior = function(name){
    this.name = name;  
    this.health = 100;
    this.strike = function(enemy, swings) {
        enemy.health = Math.max(0, enemy.health - (swings * 10));   
    }
}