    class Hero {
         #health
         
         constructor(name,health,attack){
            this.name = name;
            this.health = health;
            this.attack = attack;
     }

     getName() {
        return this.name;

     }

     getHealth(){
        return this.#health
     }
     showStats(){
        console.log("Name: "+ this.name);
        console.log("Health: "+ this.health);
        console.log("Attack: "+ this.attack);
        console.log("--------------------------")

     }
    
    }
    class Warrior extends Hero {
        useAbility(){
            console.log("$(this.name) usedPower Strike");
        }
     }
    class Mage extends Hero {
        constructor(name,health,attack,mana){
            super(name,health,attack);
            this.mana = mana;
        }

        usedAbility(){
            console.log("$(this.name) casts Fireball");

        }
        
        showStats(){
            super.showStats();
            console.log("Mana: "+ this.name);
        }
    }
    
const hero1 = new Hero("Thorin",100,10);
const hero2 = new Hero("Gandalf",100,8);

// Thorin.showStats();
// Thorin.useAbility();

hero1.showStats();
hero2.showStats();


 